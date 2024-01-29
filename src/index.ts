import * as core from '@actions/core';
import * as github from '@actions/github';

async function runPullRequest(): Promise<void> {
    try {
        // I need to desctructure the title and description from the PR payload
        const { title, body: description } = github.context.payload.pull_request;

        //check if the PR has a title
        if(!title){
            core.setFailed('The PR must have a title!');
        }

        //check if there is a description
        if(!description){
            core.setFailed('The PR must have a description!');
        }

        //check for both title and description
        if(!title || !description){
            core.setFailed('The PR must have both a title and a description!');
        }
    } catch (error){
        core.setFailed((error as Error).message);
    }
}

runPullRequest();