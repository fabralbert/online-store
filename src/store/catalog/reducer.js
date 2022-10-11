// Начальное состояние товара
const initialState = {
  items: [],
}

 function catalogReducer(state = initialState, action){
  switch (action.type) {
    case "catalog/load-success":
      return { ...state, items: action.payload.data};

    case "catalog/load-error":
      return { ...state, items: []};

    default:
      return state;
  }
}

export default catalogReducer