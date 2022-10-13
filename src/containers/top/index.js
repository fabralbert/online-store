import React, {useCallback} from "react";
import LayoutFlex from "../../components/layouts/layout-flex";
import LoginBtn from "../../components/login-btn"
import actionsModals from "../../store/modals/actions";
import actionsLogin from "../../store/login/actions";
import { useDispatch, useSelector } from "react-redux";

function TopContainer() {

  const select = useSelector(state => ({
    user: state.login.user,
  }));

  const dispatch = useDispatch();

  const callbacks = {
    // Открытие корзины
    openModalLogin: useCallback(() => {
      dispatch(actionsModals.open('login'));
    }, []),
    // Открытие корзины
    onUnlogin: useCallback(() => {
      dispatch(actionsLogin.signOut());
    }, []),
  };

  return (
    <LayoutFlex flex="center">
      <LoginBtn onOpen={callbacks.openModalLogin} user={select.user} onUnlogin={callbacks.onUnlogin}/>
    </LayoutFlex>
  );
}

export default React.memo(TopContainer);