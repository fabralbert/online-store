import React, {useCallback} from "react";
import LayoutFlex from "../../components/layouts/layout-flex";
import LoginBtn from "../../components/login-btn"
import actionsModals from "../../store/modals/actions";
import { useDispatch } from "react-redux";

function TopContainer() {

  const dispatch = useDispatch();

  const callbacks = {
    // Открытие корзины
    openModalBasket: useCallback(() => {
      dispatch(actionsModals.open('login'));
    }, []),
  };

  return (
    <LayoutFlex flex="center">
      <LoginBtn onOpen={callbacks.openModalBasket}/>
    </LayoutFlex>
  );
}

export default React.memo(TopContainer);
