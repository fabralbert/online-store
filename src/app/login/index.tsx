import React, {useCallback} from "react";
import LayoutFlex from "../../components/layouts/layout-flex";
import FormQuestion from "../../components/login-form"
import LayoutModal from "../../components/layouts/layout-modal";
import actionsModals from "../../store/modals/actions";
import actionsLogin from "../../store/login/actions";
import { useDispatch, useSelector } from "react-redux";
import {RootState} from "../../store"

interface Data { 
  username: string;
  password: string;
}

function Login() {

  const dispatch = useDispatch();

  const select = useSelector((state: RootState) => ({
    user: state.login.user,
    error: state.login.error,
  }));


  const callbacks = {
    // Закрытие любой модалки
    closeModal: useCallback(() => {
      dispatch(actionsModals.close());
    }, []),
    // Логин
    onLogin: useCallback((data) => {
      dispatch(actionsLogin.signIn(data));
    }, []),
  };
  
  return (
    <LayoutModal title={'Логин'} onClose={callbacks.closeModal}>
      <LayoutFlex flex={'center'}>
        <FormQuestion onClose={callbacks.closeModal} onLogin={callbacks.onLogin} errorLogin={select.error} user={select.user}/>
      </LayoutFlex>
    </LayoutModal>
  )
}

export default React.memo(Login);
