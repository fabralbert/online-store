import { Dispatch } from "redux";

interface Data { 
  username: string;
  password: string;
}

const actionsLogin = {

  signIn: (data: Data) => {
    return async (dispatch: Dispatch) => {
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
          dispatch({type: 'login/login-error', payload: {error: dataUsers.error}});
        } else {
          // Товары упешно загружены
          dispatch({type: 'login/login-success', payload: {user: dataUsers.username}});
        }
      } catch (e){
        // Ошибка при загрузке
        console.error(e);
      }
    }
  },
  
  signOut: () => {
    return {type: 'login/unlogin'}
  }
}

export default actionsLogin


