export enum LoginActionTypes {
  LOGIN_LOGIN_ERROR = 'LOGIN/LOGIN-ERROR',
  LOGIN_LOGIN_SUCCESS = 'LOGIN/LOGIN-SUCCESS',
  LOGIN_UNLOGIN = 'LOGIN/UNLOGIN',
}

interface LoginLoginErrorAction {
  type: LoginActionTypes.LOGIN_LOGIN_ERROR;
  payload: Payload;
}

interface LoginLoginSuccessAction {
  type: LoginActionTypes.LOGIN_LOGIN_SUCCESS;
  payload: Payload;
}

interface LoginLoadErrorAction {
  type: LoginActionTypes.LOGIN_UNLOGIN;
}

export type LoginAction = LoginLoginErrorAction | LoginLoginSuccessAction | LoginLoadErrorAction

interface Payload {
  error: string;
  user: string;
}

export interface LoginState {
  error: null | string;
  user: string;
}