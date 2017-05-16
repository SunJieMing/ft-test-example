import { ADD_MESSAGE } from '../actions';

export default (messages = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return messages.concat(action.payload);
    default:
      return messages;
  }
};
