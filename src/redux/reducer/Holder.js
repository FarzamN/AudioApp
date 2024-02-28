export const USER_DETAILS = 'USER_DETAILS';
export const OTP = 'OTP';
export const BOOKS = 'BOOKS';

const initial_state = {
  userDetails: null,
  otp: null,
  books: [],
};

const holderReducer = (state = initial_state, action) => {
  switch (action.type) {
    case USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    case OTP:
      return {
        ...state,
        otp: action.payload,
      };
    case BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default holderReducer;
