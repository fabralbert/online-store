import { render, screen, fireEvent, waitFor, getByTestId } from "@testing-library/react";
import '@testing-library/jest-dom'
import Login from "./index";
import Main from "../login/index";
import { createTestStore } from "../../testHelpers";
import {Provider} from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { items, articleData } from "../../testHelpers/mockData/dataExamples";
import actionsLogin from '../../store/login/actions'
import { LoginActionTypes } from "../../store/login/types";
import { Store, AnyAction } from "redux";

 // @ts-ignore
 
let store: Store<any, AnyAction>;

describe('Login', () => {

  beforeEach(() => {
    store = createTestStore();
  });

  it("Login page is visible after click button",  async () => {
    
    render(
    // @ts-ignore
      <Provider store={store}><Main /></Provider>,  {wrapper: MemoryRouter}
    );

    const loginBtn = screen.getByText('Войти');
    fireEvent.click(loginBtn);
    
  
    expect(screen.getByTestId('login-page')).toBeInTheDocument()

    const loginInp = screen.getByPlaceholderText('Логин');
    const passwordInp = screen.getByPlaceholderText("Пароль");
    const onLogin = screen.getByRole("button", { name: "Войти" });

    expect(loginInp).toBeInTheDocument()
    expect(passwordInp).toBeInTheDocument()
    expect(onLogin).toBeInTheDocument()

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug()
  });
})




