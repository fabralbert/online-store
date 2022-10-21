import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import LayoutModal from "./index";

const onClose = jest.fn()

describe('Field', () => {
  it("Field render", () => {

    render(
    <LayoutModal title={'Корзина'} onClose={onClose}>
      <div>текст</div>
    </LayoutModal>
    );
  
    expect(screen.getByTestId('layout-modal')).toBeInTheDocument();
  });

  it("should on close be clicked", () => {

    render(
    <LayoutModal title={'Корзина'} onClose={onClose}>
      <div>текст</div>
    </LayoutModal>
    );
  
    
    fireEvent.click(screen.getByTestId('close-btn'))
    expect(onClose).toBeCalledTimes(1)
  })

  it("should title be empty if props title empty", () => {

    render(
    <LayoutModal title={''} onClose={onClose}>
      <div>текст</div>
    </LayoutModal>
    );

    expect(screen.getByTestId('layout-title')).toContainHTML('Модальное окно')
  })
})
