import { dataItems } from '../../dataToFetch/MyFetchItems' // симуляция сервера с товарами

const actionsArticle =  {

  load: (id) => {
    return async(dispatch, getState) => {
      try {
        const json = await dataItems.find((item) => item.id === parseInt(id));

        dispatch({type: 'article/load-success', payload: {data: json}});

      } catch (e){
        
        dispatch({type: 'article/load-error'});
      }
    }
  },

  editArticle: (data) => {
    return {type: 'article/edit', payload: {data}}
  },
}

export default actionsArticle;
