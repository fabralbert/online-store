import {LoginActionTypes, LoginAction, LoginState} from "./types"

const initialState: LoginState = {
  user: '',
  error: null,
}

function loginReducer(state = initialState, action: LoginAction): LoginState{
  switch (action.type) {
    case LoginActionTypes.LOGIN_LOGIN_ERROR:
      return { ...state, user: action.payload.user, error: action.payload.error};

    case LoginActionTypes.LOGIN_LOGIN_SUCCESS:
      return { ...state, error: action.payload.error, user: action.payload.user};

    case LoginActionTypes.LOGIN_UNLOGIN:
      return { ...state, error: null, user: ''};

    default:
      return state;
  }
}

export default loginReducer