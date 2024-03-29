import React, {useCallback} from "react";
import List from "../../components/list";
import Item from "../../components/item";
import { useDispatch, useSelector } from "react-redux";
import actionsBasket from "../../store/basket/actions";
import actionsModals from "../../store/modals/actions";
import Loader from "../../components/loader";
import {RootState} from "../../store"
import { useAppDispatch } from "../../hooks/useTypesDispatch";

// eslint-disable-next-line @typescript-eslint/no-redeclare
interface Item {
  id: string;
  img: string;
  title: string;
  price: number;
  countLeft: number;
  description: string;
}

function CatalogList() {

  const dispatch = useAppDispatch();

  const select = useSelector((state: RootState) => ({
    items: state.catalog.items,
    isLoading: state.catalog.isLoading,
    user: state.login.user,
  }));

  // добавление товара в корзину
  const onAdd = useCallback((id: string) => dispatch(actionsBasket.addToBasket(id)), [])
  // Открытие модалки логина
  const openModalLogin = useCallback(() => {
    dispatch(actionsModals.open('login'));
  }, [])

  const renders = {
    item: useCallback((item: Item) => (
      <Item item={item} link={`/articles/${item.id}`} onAdd={onAdd} user={select.user} onOpen={openModalLogin}/>
    ), [select.user]),
  }

  return (
    select.isLoading ?
    <Loader data-testid="loader"/> :
    <List items={select.items} renderItem={renders.item}/>
  );
}

export default React.memo(CatalogList);
