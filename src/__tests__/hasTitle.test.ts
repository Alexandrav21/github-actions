import { hasTitle } from '../utils/hasTitle';
import Context from '@actions/github/lib/context';

describe('hasTitle', () => {
  it('should not throw an error for a valid title', () => {
    expect(() => hasTitle({ payload: { pull_request: { title: 'haha'} } } as unknown as Context)).not.toThrow();
  });
  it('should throw an error for an empty title', () => {
    expect(() => hasTitle({ payload: { pull_request: { title: ''} } } as unknown as Context)).toThrow('The PR must have a title!');
  });
});








// //create a simple interface the mock the context object as title is not working otherwise


// const mockContext = {
//   payload: {
//     pull_request: {
//       title: 'Valid title'
//     }
//   }
// } as context;
// describe('hasTitle', () => {
//   it('should not throw an error for a valid title', () => {
//     // Test that hasTitle doesn’t throw an error for a valid title
//     expect(() => hasTitle(mockContext)).not.toThrow();
//   });
//   it('should throw an error for an empty title', () => {
//     // Adjust the title to test for an empty title
//     mockContext.payload.pull_request.title = '';
//     // Test that hasTitle throws an error for an empty title
//     expect(() => hasTitle(mockContext)).toThrow('The PR must have a title!');
//   });
// });


// //create a simple interface the mock the context object as title is not working otherwise
// interface mockContext {
//   payload: {
//     pull_request: {
//       title: string;
//     }
//   }
// } as Context;

// describe('hasTitle', () => {
//   it('should not throw an error for a valid title', () => {
//     // Define a mock context object with a valid title
//     const mockContext = {
//       payload: {
//         pull_request: {
//           title: 'Valid title'
//         }
//       }
//     };
//     // Test that hasTitle doesn’t throw an error for a valid title
//     expect(() => hasTitle(mockContext as any)).not.toThrow();
//   });
//   it('should throw an error for an empty title', () => {
//     // Define a mock context object with an empty title
//     const mockContext = {
//       payload: {
//         pull_request: {
//           title: ''
//         }
//       }
//     };
//     // Test that hasTitle throws an error for an empty title
//     expect(() => hasTitle(mockContext as any)).toThrow('The PR must have a title!');
//   });
// });