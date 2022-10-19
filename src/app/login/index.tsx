import React, {useCallback} from "react";
import LayoutFlex from "../../components/layouts/layout-flex";
import FormQuestion from "../../components/login-form"
import LayoutModal from "../../components/layouts/layout-modal";
import actionsModals from "../../store/modals/actions";
import actionsLogin from "../../store/login/actions";
import { useDispatch } from "react-redux";
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

  const callbacks = {
    // Закрытие любой модалки
    closeModal: useCallback(() => {
      dispatch(actionsModals.close());
    }, []),
    // Логин
    onLogin: useCallback((data: Data) => {
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
