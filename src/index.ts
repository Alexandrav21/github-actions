import * as core from '@actions/core';
import * as github from '@actions/github';
import { Octokit } from '@octokit/rest';
import { hasTitle } from './utils/hasTitle';
import { hasDescription } from './utils/hasDescription';
import { hasJiraLink } from './utils/hasJiraLink';

export async function runPullRequest(): Promise<void> {
    try {
        // I need to desctructure the title and description from the PR payload
        const { title, body: description } = github.context.payload.pull_request;

        //check if the PR has a title
        //check if there is a description
        //check for the description includes a Jira link
        hasTitle(title);
        hasDescription(description);
        hasJiraLink(description);
       
    } catch (error){
        core.setFailed((error as Error).message);
    }
}

runPullRequest();


