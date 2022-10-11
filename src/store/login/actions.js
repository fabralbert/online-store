import { MyFetch } from '../../data/MyFetch' // симуляция сервера

const actionsLogin = {

  signIn: (data) => {
    return async (dispatch) => {
      try {
        // тут должен быть запрос к серверу с помощью fetch
        const json = await MyFetch(data)

        if (json.error) {
          dispatch({type: 'login/login-error', payload: {error: json.error}});
        } else {
          // Товары упешно загружены
          dispatch({type: 'login/login-success', payload: {user: json.name}});
        }
      } catch (e){
        // Ошибка при загрузке
        console.error(e);
      }
    }
  },
}

export default actionsLogin


