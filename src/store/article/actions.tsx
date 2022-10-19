import { Dispatch } from "redux";
import { RootState } from "..";

import { ArticleAction, ArticleActionTypes } from "./types";

const actionsArticle =  {

  load: (id: string) => {
    return async(dispatch: Dispatch<ArticleAction>, getState:() => RootState) => {
      dispatch({type: ArticleActionTypes.ARTICLE_LOAD})
      
      try {
        const response = await fetch('https://my-json-server.typicode.com/fabralbert/demo/dataItems');
        const result = await response.json();
        const data = result.find((item: { id: string | boolean | number }) => item.id === id); //@todo было item: { id: string | boolean | number }

        dispatch({type: ArticleActionTypes.ARTICLE_LOAD_SUCCESS, payload: {data}});

      } catch (e){
        
        dispatch({type: ArticleActionTypes.ARTICLE_LOAD_ERROR});
      }
    }
  },

  editArticle: (data: string) => {
    return {type: ArticleActionTypes.ARTICLE_EDIT, payload: {data}}
  },
}

export default actionsArticle;
