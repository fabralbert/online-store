import { render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom'
import LoginForm from "./index";
import { MemoryRouter } from 'react-router-dom';

const onClose = jest.fn();
const onLogin = jest.fn();

describe('LoginForm', () => {
  it("Login form render", () => {

    render(<LoginForm onClose={onClose} onLogin={onLogin} errorLogin={''} user={'admin'}/>,  {wrapper: MemoryRouter});
  
    expect(screen.getByTestId('login-form')).toBeInTheDocument();

  });
  

  it("should onClose clicked", () => {

    render(<LoginForm onClose={onClose} onLogin={onLogin} errorLogin={''} user={'admin'}/>,  {wrapper: MemoryRouter});
    fireEvent.click(screen.getByTestId('on-close'))
    expect(onClose).toBeCalledTimes(1)
    fireEvent.click(screen.getByTestId('on-login'))
    expect(onLogin).toBeCalledTimes(1)
  });

  // it("should be error in div error block", () => {

  //   render(<LoginForm onClose={onClose} onLogin={onLogin} errorLogin={'ошибка'} user={''}/>,  {wrapper: MemoryRouter});
  //   const erroDiv = screen.getByTestId('error')
  //   expect(erroDiv.textContent).toEqual('ошибка')
  // });
})

