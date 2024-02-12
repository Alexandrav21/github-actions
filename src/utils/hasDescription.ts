import { context } from '@actions/github';

export function hasDescription(githubContext: typeof context): void {
    const description = githubContext.payload.pull_request?.body; // using the pull_request 'body' property to access the description
    
    if(!description) {
        throw new Error ('The PR must have a description!')
    }
}