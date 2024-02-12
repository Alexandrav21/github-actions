import Context from '@actions/github/lib/context';

export function hasJiraLink(githubContext: Context ): void {
    const description = githubContext.payload.pull_request?.body || ''; // fixing the previous vscode error by providing a default empty string if the description is undefined

    const jiraLinkRegex = /https:\/\/trainline\.atlassian\.net\/browse\/[A-Z]+-[0-9]{3,6}/;
    if (!jiraLinkRegex.test(description)) {
        throw new Error("The PR description must include a Jira link!");
    }
}