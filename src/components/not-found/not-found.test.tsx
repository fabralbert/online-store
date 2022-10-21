import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import NotFound from "./index";

describe('NotFound', () => {
  it("NotFound render", () => {
    render(<NotFound/>);
  
    expect(screen.getByTestId('not-found')).toBeInTheDocument();
  });
})

