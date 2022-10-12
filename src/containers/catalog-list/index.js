import React, {useCallback} from "react";
import List from "../../components/list";
import Item from "../../components/item";
import { useDispatch, useSelector } from "react-redux";
import actionsBasket from "../../store/basket/actions";
import actionsModals from "../../store/modals/actions";

function CatalogList() {

  const dispatch = useDispatch();

  const select = useSelector(state => ({
    items: state.catalog.items,
    user: state.login.user,
  }));

  console.log('user', select.user)

  const callbacks = {
    // добавление товара в корзину
    onAdd: useCallback((id) => dispatch(actionsBasket.addToBasket(id)), []),
    // Открытие модалки логина
    openModalLogin: useCallback(() => {
      dispatch(actionsModals.open('login'));
    }, []),
  };

  const renders = {
    item: useCallback(item => (
      <Item item={item} link={`/articles/${item.id}`} onAdd={callbacks.onAdd} user={select.user} onOpen={callbacks.openModalLogin}/>
    ), [select.user]),
  }

  return (
    <List items={select.items} renderItem={renders.item}/>
  );
}

export default React.memo(CatalogList);
