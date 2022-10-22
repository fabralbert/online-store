import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import Main from "./index";
import { createTestStore } from "../../testHelpers";
import {Provider} from 'react-redux';
import { MemoryRouter } from 'react-router-dom';


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
})



