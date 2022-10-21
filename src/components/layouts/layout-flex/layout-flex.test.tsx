import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import LayoutFlex from "./index";

describe('Field', () => {
  it("Field render", () => {

    render(
    <LayoutFlex flex='center'>
      <div>текст</div>
    </LayoutFlex>
    );
  
    expect(screen.getByTestId('layout-flex')).toBeInTheDocument();
  });
})

