const initialState = {
  user: {},
  error: null,
}

function loginReducer(state = initialState, action){
  switch (action.type) {
    case "login/login-success":
      return { ...state, user: action.payload.user, error: null};

    case "login/login-error":
      return { ...state, error: action.payload.error, user: {}};

    default:
      return state;
  }
}

export default loginReducer