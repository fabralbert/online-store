import { Dispatch } from "redux";
import { RootState } from "..";

const actionsArticle =  {

  load: (id: string) => {
    return async(dispatch: Dispatch, getState:() => RootState) => {
      dispatch({type: 'article/load'})
      
      try {
        const response = await fetch('https://my-json-server.typicode.com/fabralbert/demo/dataItems');
        const result = await response.json();
        const data = result.find((item: { id: string | boolean | number }) => item.id === parseInt(id));

        dispatch({type: 'article/load-success', payload: {data}});

      } catch (e){
        
        dispatch({type: 'article/load-error'});
      }
    }
  },

  editArticle: (data: string) => {
    return {type: 'article/edit', payload: {data}}
  },
}

export default actionsArticle;
