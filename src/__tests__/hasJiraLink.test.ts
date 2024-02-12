import Context from '@actions/github/lib/context';
import { hasJiraLink } from '../utils/hasJiraLink';
describe('hasJiraLink', () => {
  it('should not throw an error if a JIRA link is present', () => {
    const descriptionWithLink = 'This is a PR description. JIRA link: https://trainline.atlassian.net/browse/ABC-1234';
    expect(() => hasJiraLink({ payload: { pull_request: { body: descriptionWithLink } } } as Context)).not.toThrow();
  });
  it('should throw an error if a JIRA link is missing', () => {
    const descriptionWithoutLink = 'This is a PR description without a JIRA link.';
    expect(() => hasJiraLink({ payload: { pull_request: { body: descriptionWithoutLink } } } as Context)).toThrow('The PR description must include a Jira link!');
  });
});