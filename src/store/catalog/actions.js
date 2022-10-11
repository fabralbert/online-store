import { dataItems } from '../../data' // симуляция сервера с товарами

const actionsCatalog = {

  load: () => {
    return async (dispatch) => {
      dispatch({type: 'catalog/load',})
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

  // addComment: (text, _id, _type) => {
  //   return async(dispatch, getState, services) => {
  //     dispatch({type: 'basket/addComment',})
  //     try {
  //       const json = await services.api.request({
  //         method: 'POST',
  //         url: '/api/v1/comments?fields=*,author(profile(name))',
  //         body: JSON.stringify({
  //           text,
  //           parent: {
  //             _id,
  //             _type,
  //           }
  //         })
  //       })
  //       // Коментарии успешно загружены
  //       dispatch({type: 'comments/addComment-success', payload: {data: json.result}});

  //     } catch (e){
  //       // Ошибка при загрузке
  //       dispatch({type: 'comments/addComment-error'});
  //     }
  //   }
  // },

  // resetCommentId: () => {
  //   return {type: 'basket/resetCommentId'}
  // }
}

export default actionsCatalog


