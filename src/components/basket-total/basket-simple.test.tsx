import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import BasketTotal from "./index";


const onClear = jest.fn;

describe('Basket-simple', () => {
  it("Basket-total render", () => {

    render(<BasketTotal onClear={onClear} sum={549}/>);
  
    expect(screen.getByTestId('basket-total')).toBeInTheDocument();
  });
})

