import MessagesReducer from '../../src/reducers/MessagesReducer';
import { ADD_MESSAGE } from '../../src/actions';

describe('MessagesReducer', () => {
  it('should return an empty array by default', () => {
    expect(MessagesReducer(undefined, { type: '@@@@@@' })).toEqual([]);
  });
  it('should add the action\'s payload to the provided array', () => {
    const messages = [];
    const action = {
      type: ADD_MESSAGE,
      payload: {
        text: 'Hello World',
      },
    };
    expect(MessagesReducer(messages, action)).toEqual([
      {
        text: 'Hello World',
      }
    ]);
  });
  it('should not mutate the original array', () => {
    const messages = [];
    const action = {
      type: ADD_MESSAGE,
      payload: {
        text: 'Hello World',
      },
    };
    MessagesReducer(messages, action);
    expect(messages).toEqual([]);
  });
});
