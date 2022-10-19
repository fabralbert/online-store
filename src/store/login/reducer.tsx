import { 
  LOGIN_LOGIN_ERROR, 
  LOGIN_LOGIN_SUCCESS, 
  LOGIN_UNLOGIN,
} from "../constants";

interface Payload {
  error: string;
  user: string;
}

interface Action {
  type: string;
  payload: Payload;
}

interface loginState {
  error: null | string;
  user: string;
}

const initialState: loginState = {
  user: '',
  error: null,
}

function loginReducer(state = initialState, action: Action){
  switch (action.type) {
    case LOGIN_LOGIN_ERROR:
      return { ...state, user: action.payload.user, error: null};

    case LOGIN_LOGIN_SUCCESS:
      return { ...state, error: action.payload.error, user: ''};

    case LOGIN_UNLOGIN:
      return { ...state, error: null, user: ''};

    default:
      return state;
  }
}

export default loginReducer