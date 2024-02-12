import Context from '@actions/github/lib/context';
import { hasDescription } from "../utils/hasDescription";

//  const description = githubContext.payload.pull_request?.body
describe('hasDescription', () => {
  it('should not throw an error for a valid description', () => {
    expect(() => hasDescription({payload: { pull_request: { body: 'Valid description'}}} as Context )).not.toThrow();
  });
  it('should throw an error for an empty description', () => {
    expect(() => hasDescription({payload: { pull_request: { body: ''}}} as Context )).toThrow('The PR must have a description!');
  });
});