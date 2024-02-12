import { Context } from '@actions/github';
import { hasTitle } from '../utils/hasTitle';

//create a simple interface the mock the context object as title is not working otherwise
interface mockContext {
  payload: {
    pull_request: {
      title: string;
    }
  }
}

describe('hasTitle', () => {
  it('should not throw an error for a valid title', () => {
    // Define a mock context object with a valid title
    const mockContext = {
      payload: {
        pull_request: {
          title: 'Valid title'
        }
      }
    };
    // Test that hasTitle doesn’t throw an error for a valid title
    expect(() => hasTitle(mockContext as Context)).not.toThrow();
  });
  it('should throw an error for an empty title', () => {
    // Define a mock context object with an empty title
    const mockContext = {
      payload: {
        pull_request: {
          title: ''
        }
      }
    };
    // Test that hasTitle throws an error for an empty title
    expect(() => hasTitle(mockContext as typeof context)).toThrow('The PR must have a title!');
  });
});