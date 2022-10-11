// Начальное состояние для управления модалками
const initialState = {
  name: ''
}

// Обработчик действий в redux
function modalReducer(state = initialState, action){
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