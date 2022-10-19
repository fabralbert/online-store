import { ArticleAction, ArticleState, ArticleActionTypes } from "./types";

// Начальное состояние товара
import { 
  ARTICLE_LOAD, 
  ARTICLE_LOAD_SUCCESS, 
  ARTICLE_LOAD_ERROR, 
  ARTICLE_EDIT 
} from "../constants";


const initialState: ArticleState = {
  data: {},
  isLoading: false,
}

function article(state = initialState, action: ArticleAction): ArticleState{
  switch (action.type) {
    
    case ArticleActionTypes.ARTICLE_LOAD:
      return { ...state, data: {}, isLoading: true};

    case ArticleActionTypes.ARTICLE_LOAD_SUCCESS:
      return { ...state, data: action.payload.data, isLoading: false};

    case ArticleActionTypes.ARTICLE_LOAD_ERROR:
      return { ...state, data: {}, isLoading: false};

    case ArticleActionTypes.ARTICLE_EDIT:
      return { ...state, data: {...state.data, ...action.payload.data}};

    default:
      return state;
  }
}

export default article