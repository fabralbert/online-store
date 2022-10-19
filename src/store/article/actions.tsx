import { Dispatch } from "redux";
import { RootState } from "..";
import { 
  ARTICLE_LOAD, 
  ARTICLE_LOAD_SUCCESS, 
  ARTICLE_LOAD_ERROR, 
  ARTICLE_EDIT 
} from "../constants";

const actionsArticle =  {

  load: (id: string) => {
    return async(dispatch: Dispatch, getState:() => RootState) => {
      dispatch({type: ARTICLE_LOAD})
      
      try {
        const response = await fetch('https://my-json-server.typicode.com/fabralbert/demo/dataItems');
        const result = await response.json();
        const data = result.find((item: { id: string | boolean | number }) => item.id === id);

        dispatch({type: ARTICLE_LOAD_SUCCESS, payload: {data}});

      } catch (e){
        
        dispatch({type: ARTICLE_LOAD_ERROR});
      }
    }
  },

  editArticle: (data: string) => {
    return {type: ARTICLE_EDIT, payload: {data}}
  },
}

export default actionsArticle;
