// Начальное состояние товара
const initialState = {
  data: {},
  isLoading: false,
}

function article(state = initialState, action){
  switch (action.type) {

    case "article/load":
      return { ...state, data: {}, isLoading: true};

    case "article/load-success":
      return { ...state, data: action.payload.data, isLoading: false};

    case "article/load-error":
      return { ...state, data: {}, isLoading: false};

    case "article/edit":
      return { ...state, data: {...state.data, ...action.payload.data}};

    default:
      return state;
  }
}

export default article