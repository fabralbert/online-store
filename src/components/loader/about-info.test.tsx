import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Loader from "./index";

describe('Loader', () => {
  it("Loader render", () => {
    render(<Loader />);
  
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
})

