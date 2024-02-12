import * as core from '@actions/core';
import * as github from '@actions/github';
import { Octokit } from '@octokit/rest';
import { hasTitle } from './utils/hasTitle';
import { hasDescription } from './utils/hasDescription';
import { hasJiraLink } from './utils/hasJiraLink';

// List of checks to perform on the pull request
const checks = [
    hasTitle,
    hasDescription,
    hasJiraLink
];


// Asynchronous function to perform various checks on pull requests
export async function runPullRequest(): Promise<void> {
    // Array to accumulate any encountered errors during the checks
    const errors = checks.reduce<string[]>((acc, check) => {
        try {
            // Execute each individual check with the GitHub context
            check(github.context);
        } catch (error) {
            // If an error occurs during the check, add its message to the errors array
            if (error instanceof Error) {
                acc.push(error.message);
            }
        }
        return acc;
    }, []);
    // If any errors were encountered during the checks
    if (errors.length > 0) {
        // Set the status of the action as failed and log the errors
        core.setFailed(errors.join('\n'));
    }
}
// Execute the function to trigger the pull request checks
if (process.env.NODE_ENV !== 'test') {
runPullRequest();
};