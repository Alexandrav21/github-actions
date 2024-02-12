import { context } from '@actions/github';

export function hasTitle(githubContext: typeof context): void {
    const title = context.payload.pull_request?.title // using the title property of the pull_request object, using optional chaining ? in case pull_request is undefined
    
    if (!title) {
        throw new Error('The PR must have a title!')
    }
};