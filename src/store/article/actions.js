const actionsArticle =  {

  load: (id) => {
    return async(dispatch, getState) => {
      dispatch({type: 'article/load'})
      
      try {
        const response = await fetch('https://my-json-server.typicode.com/fabralbert/demo/dataItems');
        const result = await response.json();
        const data = result.find((item) => item.id === parseInt(id));

        dispatch({type: 'article/load-success', payload: {data}});

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
