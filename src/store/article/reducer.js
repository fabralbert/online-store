// Начальное состояние товара
const initialState = {
  data: {},
}

function article(state = initialState, action){
  switch (action.type) {

    case "article/load-success":
      return { ...state, data: action.payload.data};

    case "article/load-error":
      return { ...state, data: {}};

    default:
      return state;
  }
}

export default article