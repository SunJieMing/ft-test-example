import {
  addMessage,
  ADD_MESSAGE,
} from '../../src/actions';

describe('addMessage', () => {
  it('should return an object with the type ADD_MESSAGE', () => {
    const action = addMessage();
    expect(action.type).toBe(ADD_MESSAGE);
  });

  it('should attach the provided text to the action\'s payload', () => {
    const action = addMessage('Hello World!');
    expect(action.payload.text).toBe('Hello World!');
  });

  it('should return an empty string if no text is provided', () => {
    const action = addMessage();
    expect(action.payload.text).toBe('');
  });
});
