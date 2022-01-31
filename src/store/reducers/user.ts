
const initialState = {
  isLoggedIn: false,
  _email: "",
  _token: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        _email: action._email,
        _token: action._token
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        _token: null,
      };
    default:
      return state;
  }
};

export default reducer;
