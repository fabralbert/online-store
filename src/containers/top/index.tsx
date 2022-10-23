import React, {useCallback} from "react";
import LayoutFlex from "../../components/layouts/layout-flex";
import LoginBtn from "../../components/login-btn"
import actionsModals from "../../store/modals/actions";
import actionsLogin from "../../store/login/actions";
import { useDispatch, useSelector } from "react-redux";
import {RootState} from "../../store"
import { useAppDispatch } from "../../hooks/useTypesDispatch";

function TopContainer() {

  const select = useSelector((state: RootState) => ({
    user: state.login.user,
  }));

  const dispatch = useAppDispatch();

  // Открытие корзины
  const openModalLogin = useCallback(() => {
    dispatch(actionsModals.open('login'));
  }, [])
  // Открытие корзины
  const onUnlogin = useCallback(() => {
    dispatch(actionsLogin.signOut());
  }, [])

  return (
    <LayoutFlex flex="center">
      <LoginBtn onOpen={openModalLogin} user={select.user} onUnlogin={onUnlogin}/>
    </LayoutFlex>
  );
}

export default React.memo(TopContainer);
