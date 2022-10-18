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
    case "modal/open":
      return { ...state, name: action.payload.name};
    case "modal/close":
      return { ...state, name: null };
    default:
      return state;
  }
}

export default modalReducer