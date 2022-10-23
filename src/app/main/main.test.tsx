import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import Main from "./index";
import { createTestStore } from "../../testHelpers";
import {Provider} from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { items, articleData } from "../../testHelpers/mockData/dataExamples";
import actionsCatalog from '../../store/catalog/actions'
import { CatalogActionTypes } from "../../store/catalog/types";


 // @ts-ignore
 
let store;

describe('Main', () => {

  beforeEach(() => {
    store = createTestStore();
  });

  it("Main page is loading",  async () => {
    
    render(
    // @ts-ignore
      <Provider store={store}><Main /></Provider>,  {wrapper: MemoryRouter}
    );
  
  });
  

  it("Main page is loading, and visible loader",  async () => {
  
    render(
      // @ts-ignore
        <Provider store={store}><Main /></Provider>,  {wrapper: MemoryRouter}
      );
  
      await waitFor(() => {
        
        // @ts-ignore
        store.dispatch({type: CatalogActionTypes.CATALOG_LOAD});
        
        expect(screen.getByTestId('loader')).toBeVisible();
  
      });
  });

  it("Main page is loaded with all items",  async () => {
  
    render(
      // @ts-ignore
        <Provider store={store}><Main /></Provider>,  {wrapper: MemoryRouter}
      );

        
      // @ts-ignore
      await store.dispatch(actionsCatalog.load());

      for (let item of items){
        // @ts-ignore
        expect(screen.getByText(item.title)).toBeInTheDocument();
      }
  });
})



