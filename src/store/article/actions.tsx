import { Dispatch } from "redux";

import { ArticleAction, ArticleActionTypes } from "./types";

interface Data {
  countLeft: number | string;
  description: string;
  price: number | string;
  title: string;
  img: string;
  id: string;
}

interface DataSave {
  countLeft: number | string;
  description: string;
  price: number | string;
  title: string;
}

const actionsArticle =  {

  load: (id: string) => {
    return async(dispatch: Dispatch<ArticleAction>) => {
      dispatch({type: ArticleActionTypes.ARTICLE_LOAD})
      
      try {
        const response = await fetch('https://my-json-server.typicode.com/fabralbert/demo/dataItems');
        const result = await response.json();
        const data = result.find((item: Data) => item.id === id);
        
        dispatch({type: ArticleActionTypes.ARTICLE_LOAD_SUCCESS, payload: {data}});

      } catch (e){
        
        dispatch({type: ArticleActionTypes.ARTICLE_LOAD_ERROR});
      }
    }
  },

  editArticle: (data: DataSave) => {

    console.log('edit', data)
    return {type: ArticleActionTypes.ARTICLE_EDIT, payload: {data}}
  },
}

export default actionsArticle;
