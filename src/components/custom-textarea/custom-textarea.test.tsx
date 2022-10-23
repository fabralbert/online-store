import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import CustomTextArea from "./index";

const onChangeValue = jest.fn;

describe('Custom textarea', () => {
  it("should render full content with all count props to see textarea-counter also", () => {

    render(<CustomTextArea rows={6} name='description' value={'any textarea'} onChange={onChangeValue} countLimit={600} totalCount={600} width={600}/>);
  
    expect(screen.getByTestId('custom-textarea')).toBeInTheDocument();
    expect(screen.getByTestId('custom-textarea-counter')).toBeInTheDocument();

  });

  it("should no render custom textarea counter if we have error in props", () => {

    render(<CustomTextArea rows={6} name='description' value={'any textarea'} error="ошибка" onChange={onChangeValue} countLimit={600} totalCount={600} width={600}/>);
  
    expect(screen.queryByTestId('custom-input-counter')).toBeNull();

  });

  it("Input value is typing", () => {
    const mockHandleChange = jest.fn();

    render(<CustomTextArea  rows={6} name='description' value={'any textarea text'} placeholder={'anyinput'} onChange={mockHandleChange} countLimit={600} totalCount={600} width={600}/>);

    const textarea = screen.getByPlaceholderText("anyinput");

    fireEvent.change(textarea, { target: { value: "1" } })

    expect(mockHandleChange).toHaveBeenCalledTimes(1);

  });
})

