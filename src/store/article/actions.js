import { dataItems } from '../../dataToFetch/MyFetchItems' // симуляция сервера с товарами

const actionsArticle =  {

  load: (id) => {
    console.log('id', id)

    return async(dispatch, getState) => {
      try {
        const json = await dataItems.find((item) => item.id === parseInt(id));

        console.log('json', json)

        dispatch({type: 'article/load-success', payload: {data: json}});

      } catch (e){
        
        dispatch({type: 'article/load-error'});
      }
    }
  },

  close: () => {
    return {type: 'modal/close'}
  }
}

export default actionsArticle;
