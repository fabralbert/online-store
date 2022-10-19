
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

// типизированные actions
export enum ArticleActionTypes {
  ARTICLE_LOAD = 'ARTICLE/LOAD',
  ARTICLE_LOAD_SUCCESS = 'ARTICLE/LOAD-SUCCESS',
  ARTICLE_LOAD_ERROR = 'ARTICLE/LOAD-ERROR',
  ARTICLE_EDIT = 'ARTICLE/EDIT',
}

interface ArticleLoadAction {
  type: ArticleActionTypes.ARTICLE_LOAD;
}

interface ArticleLoadSuccessAction {
  type: ArticleActionTypes.ARTICLE_LOAD_SUCCESS;
  payload: Payload;
}

interface ArticleLoadErrorAction {
  type: ArticleActionTypes.ARTICLE_LOAD_ERROR;
}
interface ArticleEditAction {
  type: ArticleActionTypes.ARTICLE_EDIT;
  payload: Payload;
}

export type ArticleAction = ArticleLoadAction | ArticleLoadSuccessAction | ArticleLoadErrorAction | ArticleEditAction

export interface ArticleState {
  data: {}
  isLoading: boolean;
}