import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "./index";
import { createTestStore } from "../testHelpers";
import {Provider} from 'react-redux';
import { MemoryRouter } from 'react-router-dom';


 // @ts-ignore
 
let store;

describe('App', () => {

  beforeEach(() => {
    store = createTestStore();
  });

  it("Routing to about page",  async () => {
    
    render(
    // @ts-ignore
      <Provider store={store}><App /></Provider>,  {wrapper: MemoryRouter}
    );

    const aboutPage = screen.getByText('О магазине')
    fireEvent.click(aboutPage)
    expect(screen.getByText('В данном магазине вы можете приобрести различные книги.')).toBeInTheDocument();
  });
})

