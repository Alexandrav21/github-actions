import { hasTitle } from '../utils/hasTitle';
import Context from '@actions/github/lib/context';

describe('hasTitle', () => {
  it('should not throw an error for a valid title', () => {
    expect(() => hasTitle({ payload: { pull_request: { title: 'Valid title'} } } as unknown as Context)).not.toThrow();
  });
  it('should throw an error for an empty title', () => {
    expect(() => hasTitle({ payload: { pull_request: { title: ''} } } as unknown as Context)).toThrow('The PR must have a title!');
  });
});

