import { dataItems } from '../../dataToFetch/MyFetchItems' // симуляция сервера с товарами

const actionsCatalog = {

  load: () => {
    return async (dispatch) => {
      try {
        // тут должен быть запрос к серверу с помощью fetch
        const json = await dataItems;
        // Товары упешно загружены
        dispatch({type: 'catalog/load-success', payload: {data: json}});
      } catch (e){
        // Ошибка при загрузке
        dispatch({type: 'catalog/load-error'});
      }
    }
  },
}

export default actionsCatalog


