export function MyFetch(data){
  let user = {};

  if (data.login === 'client' && data.password === '123456'){
    user.name = 'client';
    return user
  }
  if (data.login === 'admin' && data.password === '123456'){
    user.name = 'admin';
    return user
  }

  else {
    user.error = 'Неправильный логин или пароль'
    return user
  }
}