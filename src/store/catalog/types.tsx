export enum CatalogActionTypes {
  CATALOG_LOAD = 'CATALOG/LOAD',
  CATALOG_LOAD_SUCCESS = 'CATALOG/LOAD-SUCCESS',
  CATALOG_LOAD_ERROR = 'CATALOG/LOAD-ERROR',
}

interface Payload {
  data: Item[]        // @todo
}

interface CatalogLoadAction {
  type: CatalogActionTypes.CATALOG_LOAD;
}

interface CatalogLoadSuccessAction {
  type: CatalogActionTypes.CATALOG_LOAD_SUCCESS;
  payload: Payload;
}

interface CatalogLoadErrorAction {
  type: CatalogActionTypes.CATALOG_LOAD_ERROR;
}

interface Item {
  id: string;
  title: string;
  price: number;
  img: string;
  description: string;
  countLeft: number;
}

export type CatalogAction = CatalogLoadAction | CatalogLoadSuccessAction | CatalogLoadErrorAction

export interface CatalogState {
  items: Item[];
  isLoading: boolean;
}