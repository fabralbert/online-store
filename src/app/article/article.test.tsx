import { act, getByTestId, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import Article from "./index";
import { createTestStore } from "../../testHelpers";
import { articleEditData } from "../../testHelpers/mockData/dataExamples";
import {Provider} from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import actionsArticle from '../../store/article/actions'
import { ArticleActionTypes } from "../../store/article/types";


 // @ts-ignore
 
let store;

describe('About', () => {

  beforeEach(() => {
    store = createTestStore();
  });

  it("Article is loading, and visible loader",  async () => {
  
    render(
      // @ts-ignore
        <Provider store={store}><Article /></Provider>,  {wrapper: MemoryRouter}
      );
  
      await waitFor(() => {
        
        // @ts-ignore
        store.dispatch({type: ArticleActionTypes.ARTICLE_LOAD});
        
        expect(screen.getByTestId('loader')).toBeVisible();
  
      });
  });

  it("Article is loaded to visible data",  async () => {

    render(
      // @ts-ignore
        <Provider store={store}><Article /></Provider>,  {wrapper: MemoryRouter}
      );
  
      await waitFor(() => {

        const data = {
          title: "test1",
          description: "test2",
          price: "600",
          countLeft: "10"
        }

        const expectData = {
          title: "test1",
          description: "test2",
        }
        
        // @ts-ignore
        store.dispatch({type: ArticleActionTypes.ARTICLE_LOAD_SUCCESS, payload: {data}});

        for (let key in expectData){
          // @ts-ignore
          expect(screen.getByText(expectData[key])).toBeVisible();
        }
  
      });
  });
})


