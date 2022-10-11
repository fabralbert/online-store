import React, {useCallback, useMemo} from "react";
import Menu from "../../components/menu";
import BasketSimple from "../../components/basket-simple";
import LayoutFlex from "../../components/layouts/layout-flex";
import actionsModals from "../../store/modals/actions";
import { useDispatch, useSelector } from "react-redux";

function ToolsContainer() {

  const dispatch = useDispatch();

  const select = useSelector(state => ({
    items: state.basket.items,
    totalAmount: state.basket.totalAmount,
    sum: state.basket.sum
  }));

  const callbacks = {
    // Открытие корзины
    openModalBasket: useCallback(() => {
      dispatch(actionsModals.open('basket'));
    }, []),
  };

  const options = {
    menu: useMemo(() => ([
      {key: 1, title: 'Главная', link: '/'},
      {key: 2, title: 'О магазине', link: '/about'},
    ]), []),
  }

  return (
    <LayoutFlex flex='between'>
      <Menu items={options.menu}/>
      <BasketSimple onOpen={callbacks.openModalBasket} totalAmount={select.totalAmount} sum={select.sum}/>
    </LayoutFlex>
  );
}

export default React.memo(ToolsContainer);