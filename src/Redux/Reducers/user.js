import { INITIALIZE_USER_INFO, CHANGE_FIRSTNAME, CHANGE_LASTNAME } from '../actionTypes.js';

const initialState = {
    firstname: 'New',
    lastname: 'User',
    username: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_USER_INFO: {
      const { firstname, lastname, username } = action.payload;
      return {
        ...state,
        firstname,
        lastname,
        username,
      };
    }
    case CHANGE_FIRSTNAME: {
      const { firstname } = action.payload;
      return {
        ...state,
        firstname,
      };
    }
    case CHANGE_LASTNAME: {
        const { lastname } = action.payload;
        return {
          ...state,
          lastname,
        };
      }
    default:
      return state;
  }
}
