import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Field from "./index";

describe('Field', () => {
  it("Field render", () => {

    render(
    <Field label={'текст'} error={'ошибка'} width={400}>
      <div>текст</div>
    </Field>
    );
  
    expect(screen.getByTestId('field')).toBeInTheDocument();
  });
})

