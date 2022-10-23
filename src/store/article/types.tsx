
 interface Data {
  id: string;
  title: string;
  price: number | string;
  img: string;
  description: string;
  countLeft: number | string;
}

interface DataEdit {
  title: string;
  price: number | string;
  description: string;
  countLeft: number | string;
}

interface PayloadEdit {
  data: DataEdit
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
  payload: PayloadEdit;
}

export type ArticleAction = ArticleLoadAction | ArticleLoadSuccessAction | ArticleLoadErrorAction | ArticleEditAction

export interface ArticleState {
  data: Data
  isLoading: boolean;
}