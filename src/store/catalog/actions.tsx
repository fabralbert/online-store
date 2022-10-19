import { Dispatch } from "redux";
import { 
  CATALOG_LOAD, 
  CATALOG_LOAD_SUCCESS, 
  CATALOG_LOAD_ERROR,
} from "../constants";

const actionsCatalog = {

  load: () => {
    return async (dispatch: Dispatch) => {
      dispatch({type: CATALOG_LOAD})

      try {
        const response = await fetch('https://my-json-server.typicode.com/fabralbert/demo/dataItems');
        const result = await response.json();

        // Товары упешно загружены
        dispatch({type: CATALOG_LOAD_SUCCESS, payload: {data: result}});
      } catch (e){
        // Ошибка при загрузке
        dispatch({type: CATALOG_LOAD_ERROR});
      }
    }
  },
}

export default actionsCatalog


