import { getByTestId, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import Basket from "./index";
import { createTestStore } from "../../testHelpers";
import { items, articleData } from "../../testHelpers/mockData/dataExamples";
import {Provider} from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import actionsBasket from '../../store/basket/actions'
import actionsCatalog from '../../store/catalog/actions'
import { BasketActionTypes } from "../../store/basket/types";
import { CatalogActionTypes } from "../../store/catalog/types";


 // @ts-ignore
 
let store;

describe('Basket', () => {

  beforeEach(() => {
    store = createTestStore();
  });

  it("should be visible items in basket after add them",  async () => {
  
    render(
      // @ts-ignore
        <Provider store={store}><Basket /></Provider>,  {wrapper: MemoryRouter}
      );

        // @ts-ignore
      await store.dispatch(actionsCatalog.load());
  
      await waitFor(() => {

        for (let item of items){
           // @ts-ignore
          store.dispatch(actionsBasket.addToBasket(item.id));
        }
      });

      for (let item of items){
        // @ts-ignore
        expect(screen.getByText(item.title)).toBeInTheDocument();
      }
  });

  it("Remove all items from basket",  async () => {
  
    render(
      // @ts-ignore
        <Provider store={store}><Basket /></Provider>,  {wrapper: MemoryRouter}
      );

        // @ts-ignore
      await store.dispatch(actionsCatalog.load());
  
      await waitFor(() => {

        for (let item of items){
           // @ts-ignore
          store.dispatch(actionsBasket.addToBasket(item.id));
        }
      });

      await waitFor(() => {

        for (let item of items){
           // @ts-ignore
          store.dispatch(actionsBasket.removeFromBasket(item.id));
        }
      });

      for (let item of items){
        // @ts-ignore
        expect(screen.queryByText(item.title)).toBeNull();
      }
  });
})


