import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import BasketSimple from "./index";


const onOpen = jest.fn;

describe('Basket-simple', () => {
  it("Basket-simple to be null if no user", () => {

    render(<BasketSimple user='' onOpen={onOpen} sum={549} totalAmount={1}/>);
  
    expect(screen.queryByTestId('basket-simple')).toBeNull();
  });

  it("Basket-simple render with user", () => {

    render(<BasketSimple user='admin' onOpen={onOpen} sum={549} totalAmount={1}/>);
  
    expect(screen.getByTestId('basket-simple')).toBeInTheDocument();
  });
})

