
export function hasJiraLink(description: string): void {
    const jiraLinkRegex = /https:\/\/trainline\.atlassian\.net\/browse\/[A-Z]+-[0-9]{3,6}/;
    if (!jiraLinkRegex.test(description)) {
        throw new Error("The PR description must include a Jira link!");
    }
}