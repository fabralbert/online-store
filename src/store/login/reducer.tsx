interface Payload {
  user: string;
  error: string;
}

interface Action {
    type: string;
    payload: Payload;
}


const initialState = {
  user: '',
  error: null,
}

function loginReducer(state = initialState, action: Action){
  switch (action.type) {
    case "login/login-success":
      return { ...state, user: action.payload.user, error: null};

    case "login/login-error":
      return { ...state, error: action.payload.error, user: ''};

    case "login/unlogin":
      return { ...state, error: null, user: ''};

    default:
      return state;
  }
}

export default loginReducer