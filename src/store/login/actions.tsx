import { Dispatch } from "redux";

import {LoginActionTypes, LoginAction} from "./types"

interface Data { 
  username: string;
  password: string;
}

const actionsLogin = {

  signIn: (data: Data) => {
    return async (dispatch: Dispatch<LoginAction>) => {
      try {
        // тут должен быть запрос к серверу с помощью fetch
        const response = await fetch('https://my-json-server.typicode.com/fabralbert/demo/users');
        const users = await response.json();

        let dataUsers = {
          username: '',
          password: '',
          error: '',
        };
        
        for (let user in users) {
          if (users[user].username === data.username && users[user].password === parseInt(data.password)){
            dataUsers.username = users[user].username;
            break;
          }
        }

        if (!dataUsers.username){
          dataUsers.error = 'Неправильный логин или пароль'
        }

        if (dataUsers.error) {
          dispatch({type: LoginActionTypes.LOGIN_LOGIN_ERROR, payload: {error: dataUsers.error, user: ''}});
        } else {
          // Товары упешно загружены
          dispatch({type: LoginActionTypes.LOGIN_LOGIN_SUCCESS, payload: {user: dataUsers.username, error: ''}});
        }
      } catch (e){
        // Ошибка при загрузке
        console.error(e);
      }
    }
  },
  
  signOut: () => {
    return {type: LoginActionTypes.LOGIN_UNLOGIN}
  }
}

export default actionsLogin


