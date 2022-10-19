import { Dispatch } from "redux";

import {CatalogActionTypes, CatalogAction} from "./types"

const actionsCatalog = {

  load: () => {
    return async (dispatch: Dispatch<CatalogAction>) => {
      dispatch({type: CatalogActionTypes.CATALOG_LOAD})

      try {
        const response = await fetch('https://my-json-server.typicode.com/fabralbert/demo/dataItems');
        const result = await response.json();

        // Товары упешно загружены
        dispatch({type: CatalogActionTypes.CATALOG_LOAD_SUCCESS, payload: {data: result}});
      } catch (e){
        // Ошибка при загрузке
        dispatch({type: CatalogActionTypes.CATALOG_LOAD_ERROR});
      }
    }
  },
}

export default actionsCatalog


