import loginArticle from "./actions"
import { LoginActionTypes } from "./types";

describe('Login actions', () => {
  it('Should dispatch once sign in action', async () => {

    const data = {
      username: 'admin',
      password: "123456",
    }

    const thunkSignInAction = loginArticle.signIn(data)
  
    const dispatchMock = jest.fn()
  
    // @ts-ignore
    await thunkSignInAction(dispatchMock)
  
    expect(dispatchMock).toBeCalledTimes(1)
  })

  it('should create an action with type "sign out"', () => {
  
    const expectation = {
      type: LoginActionTypes.LOGIN_UNLOGIN,
    };
  
    expect(loginArticle.signOut()).toEqual(expectation);
  })
})
