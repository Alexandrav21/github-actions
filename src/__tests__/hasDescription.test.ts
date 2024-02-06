import { hasDescription } from "../utils/hasDescription";

describe('hasDescription', () => {
  it('should not throw an error for a valid description', () => {
    expect(() => hasDescription('Valid Description')).not.toThrow();
  });
  it('should throw an error for an empty description', () => {
    expect(() => hasDescription('')).toThrow('The PR must have a description!');
  });
});