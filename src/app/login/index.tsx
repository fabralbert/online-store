import React, {useCallback} from "react";
import LayoutFlex from "../../components/layouts/layout-flex";
import LoginForm from "../../components/login-form"
import LayoutModal from "../../components/layouts/layout-modal";
import actionsModals from "../../store/modals/actions";
import actionsLogin from "../../store/login/actions";
import { useAppSelector } from "../../hooks/useTypesSelector"
import { useAppDispatch } from "../../hooks/useTypesDispatch";

interface Data { 
  username: string;
  password: string;
}

function Login() {

  const dispatch = useAppDispatch();

  const select = useAppSelector(state => ({
    user: state.login.user,
    error: state.login.error,
  }));

  // Закрытие любой модалки
  const closeModal = useCallback(() => {
    dispatch(actionsModals.close());
  }, [])
  // Логин
  const onLogin = useCallback((data: Data) => {
    dispatch(actionsLogin.signIn(data));
  }, [])
  
  return (
    <LayoutModal title={'Логин'} onClose={closeModal}>
      <LayoutFlex flex={'center'}>
        <LoginForm onClose={closeModal} onLogin={onLogin} errorLogin={select.error} user={select.user}/>
      </LayoutFlex>
    </LayoutModal>
  )
}

export default React.memo(Login);
