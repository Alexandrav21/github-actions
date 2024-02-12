import Context from '@actions/github/lib/context';

export function hasTitle(githubContext: Context): void {
    const title = githubContext.payload.pull_request?.title // using the title property of the pull_request object, using optional chaining ? in case pull_request is undefined
    
    if (!title) {
        throw new Error('The PR must have a title!')
    }
};