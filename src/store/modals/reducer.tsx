import { 
  MODAL_OPEN, 
  MODAL_CLOSE, 
} from "../constants";

// Начальное состояние для управления модалками
const initialState = {
  name: ''
}

interface Payload {
  name: string;
}

interface Action {
    type: string;
    payload: Payload;
}

function modalReducer(state = initialState, action: Action){
  switch (action.type) {
    case MODAL_OPEN:
      return { ...state, name: action.payload.name};
    case MODAL_CLOSE:
      return { ...state, name: null };
    default:
      return state;
  }
}

export default modalReducer