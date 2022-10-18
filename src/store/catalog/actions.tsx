import { Dispatch } from "redux";

const actionsCatalog = {

  load: () => {
    return async (dispatch: Dispatch) => {
      dispatch({type: 'catalog/load'})

      try {
        const response = await fetch('https://my-json-server.typicode.com/fabralbert/demo/dataItems');
        const result = await response.json();

        // Товары упешно загружены
        dispatch({type: 'catalog/load-success', payload: {data: result}});
      } catch (e){
        // Ошибка при загрузке
        dispatch({type: 'catalog/load-error'});
      }
    }
  },
}

export default actionsCatalog


