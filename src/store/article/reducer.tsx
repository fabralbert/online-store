import { ArticleAction, ArticleState, ArticleActionTypes } from "./types";

interface Data {
  id: string;
  title: string;
  price: number;
  img: string;
  description: string;
  countLeft: number;
}

const initialState: ArticleState = {
  data: {} as Data,
  isLoading: false,
}

function article(state = initialState, action: ArticleAction): ArticleState{
  switch (action.type) {
    
    case ArticleActionTypes.ARTICLE_LOAD:
      return { ...state, data: {} as Data, isLoading: true};

    case ArticleActionTypes.ARTICLE_LOAD_SUCCESS:
      return { ...state, data: action.payload.data, isLoading: false};

    case ArticleActionTypes.ARTICLE_LOAD_ERROR:
      return { ...state, data: {} as Data, isLoading: false};

    case ArticleActionTypes.ARTICLE_EDIT:
      return { ...state, data: {...state.data, ...action.payload.data}};

    default:
      return state;
  }
}

export default article