import { hasTitle } from "../utils/hasTitle";

describe('hasTitle', () => {
  it('should not throw an error for a valid title', () => {
    expect(() => hasTitle('Valid Title')).not.toThrow();
  });
  it('should throw an error for an empty title', () => {
    expect(() => hasTitle('')).toThrow('The PR must have a title!');
  });
});