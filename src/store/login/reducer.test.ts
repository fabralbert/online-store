import {LoginState, LoginActionTypes} from "./types"
import CatalogReducer from "./reducer"

let state: LoginState;

beforeEach(() => {
  state = {
    user: '',
    error: null,
  }
})

describe("Catalog reducer", () => {

  it("Should be error if login or password was wrong on login", () => {

    const data = {
      error: 'Неправильный логин или пароль',
      user: '',
    }
    
    const payload = {
      error: 'Неправильный логин или пароль',
      user: '',
    }

    const newState = CatalogReducer(state, {type: LoginActionTypes.LOGIN_LOGIN_ERROR, payload})
    expect(newState).toEqual(data);
  });

  it("Should be 'username' if login and password was true", () => {

    const data = {
      error: '',
      user: 'admin',
    }
    
    const payload = {
      error: '',
      user: 'admin',
    }

    const newState = CatalogReducer(state, {type: LoginActionTypes.LOGIN_LOGIN_SUCCESS, payload})
    expect(newState).toEqual(data);
  });


  it("Should be empty username and error qeual null", () => {

    const data = {
      error: null,
      user: '',
    }

    const newState = CatalogReducer(state, {type: LoginActionTypes.LOGIN_UNLOGIN})
    expect(newState).toEqual(data);
  });

});


    


