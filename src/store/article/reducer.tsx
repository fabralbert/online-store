// Начальное состояние товара
import { 
  ARTICLE_LOAD, 
  ARTICLE_LOAD_SUCCESS, 
  ARTICLE_LOAD_ERROR, 
  ARTICLE_EDIT 
} from "../constants";

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

    case ARTICLE_LOAD:
      return { ...state, data: {}, isLoading: true};

    case ARTICLE_LOAD_SUCCESS:
      return { ...state, data: action.payload.data, isLoading: false};

    case ARTICLE_LOAD_ERROR:
      return { ...state, data: {}, isLoading: false};

    case ARTICLE_EDIT:
      return { ...state, data: {...state.data, ...action.payload.data}};

    default:
      return state;
  }
}

export default article