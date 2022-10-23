import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import CustomInput from "./index";

const onChangeValue = jest.fn;

describe('custom textarea', () => {
  it("should render full content with all count props to see input-counter also", () => {

    render(<CustomInput type='number' name='countLeft' value={5} onChange={onChangeValue} width={600} countLimit={30} totalCount={30} isCount={true}/>);
  
    expect(screen.getByTestId('custom-input')).toBeInTheDocument();
    expect(screen.getByTestId('custom-input-counter')).toBeInTheDocument();

  });

  it("should no render custom input counter without count props", () => {

    render(<CustomInput type='number' name='countLeft' value={5} onChange={onChangeValue} width={600}/>);
  
    expect(screen.queryByTestId('custom-input-counter')).toBeNull();

  });

  it("Input value is typing", () => {
    const mockHandleChange = jest.fn();

    render(<CustomInput type='text' name='countLeft' value={'any input text'} onChange={mockHandleChange} placeholder={'anyinput'} width={600}/>);

    const Input = screen.getByPlaceholderText("anyinput");

    fireEvent.change(Input, { target: { value: "Login" } })

    expect(mockHandleChange).toHaveBeenCalledTimes(1);

  });
})

