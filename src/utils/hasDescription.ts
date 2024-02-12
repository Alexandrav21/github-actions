import Context from '@actions/github/lib/context';

export function hasDescription(githubContext: Context): void {
    const description = githubContext.payload.pull_request?.body; // using the pull_request 'body' property to access the description
    
    if(!description) {
        throw new Error ('The PR must have a description!')
    }
}