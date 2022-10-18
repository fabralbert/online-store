// Начальное состояние товара
interface Data {
  id: number;
  title: string;
  price: number;
  img: string;
  description: string;
  countLeft: number;
}

interface Payload {
  data: Data
}

interface Action {
    type: string;
    payload: Payload;
}

const initialState = {
  data: {},
  isLoading: false,
}

function article(state = initialState, action: Action){
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