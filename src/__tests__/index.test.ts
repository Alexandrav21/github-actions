import {runPullRequest} from '../index';
import * as core from '@actions/core';
import * as github from '@actions/github';

// jest.mock('@actions/core');
// jest.mock('@actions/github');

jest.mock('@actions/core', () => ({
  getInput: jest.fn(),
  setFailed: jest.fn(),
}));

// Mock context and getOctokit functions
jest.mock('@actions/github', () => ({
  context: {
    payload: {
      pull_request: {
        number: 1,
      },
    },
    repo: {
      owner: 'owner',
      repo: 'repo',
    },
  },
  getOctokit: jest.fn(),
}));