import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import About from "./index";
import { createTestStore } from "../../testHelpers";
import {Provider} from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
 // @ts-ignore
let store;

describe('About', () => {

  beforeEach(() => {
    store = createTestStore();
  });

  it("About page render", () => {

    render(
    // @ts-ignore
    <Provider store={store}><About /></Provider>,  {wrapper: MemoryRouter}
    );
  
    expect(screen.getByTestId('about')).toBeInTheDocument();
  });
})

