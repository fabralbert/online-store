import React, {useCallback} from "react";
import List from "../../components/list";
import Item from "../../components/item";
import { useDispatch, useSelector } from "react-redux";
import actionsBasket from "../../store/basket/actions";

function CatalogList() {

  const dispatch = useDispatch();

  const select = useSelector(state => ({
    items: state.catalog.items,
  }));

  const callbacks = {
    // добавление товара в корзину
    onAdd: useCallback((id) => dispatch(actionsBasket.addToBasket(id)), []),
  };

  const renders = {
    item: useCallback(item => (
      <Item item={item} link={`/articles/${item.id}`} onAdd={callbacks.onAdd}/>
    ), []),
  }

  return (
    <List items={select.items} renderItem={renders.item}/>
  );
}

export default React.memo(CatalogList);
