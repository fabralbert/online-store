import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import EmptyPage from "./index";
import { createTestStore } from "../../testHelpers";
import {Provider} from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
 // @ts-ignore
let store;

describe('Empty page', () => {

  beforeEach(() => {
    store = createTestStore();
  });

  it("Emptty page render", () => {

    render(
    // @ts-ignore
    <Provider store={store}><EmptyPage /></Provider>,  {wrapper: MemoryRouter}
    );
  
    expect(screen.getByTestId('empty')).toBeInTheDocument();
  });
})

