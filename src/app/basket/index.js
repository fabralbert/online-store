import React, {useCallback} from "react";
import BasketTotal from "../../components/basket-total";
import LayoutModal from "../../components/layouts/layout-modal";
import ItemBasket from "../../components/item-basket";
import ListBasket from "../../components/list-basket";
import { useDispatch, useSelector } from "react-redux";
import actionsModals from "../../store/modals/actions";
import actionsBasket from "../../store/basket/actions";

function Basket() {

  const dispatch = useDispatch();

  const select = useSelector(state => ({
    items: state.basket.items,
    sum: state.basket.sum,
  }));

  const callbacks = {
    // Закрытие любой модалки
    closeModal: useCallback(() => {
      dispatch(actionsModals.close());
    }, []),
    onRemove: useCallback((id) => {
      dispatch(actionsBasket.removeFromBasket(id));
    }, []),
    onClear: useCallback(() => {
      dispatch(actionsBasket.clearBasket());
    }, []),
  };

  const renders = {
    itemBasket: useCallback(item => (
      <ItemBasket
        item={item}
        link={`/articles/${item._id}`}
        onLink={callbacks.closeModal}
        onRemove={callbacks.onRemove}
      />
    ), []),
  }

  return (
    <LayoutModal title={'Корзина'} onClose={callbacks.closeModal}>
      <ListBasket items={select.items} renderItem={renders.itemBasket}/>
      <BasketTotal totalAmount={select.totalAmount} sum={select.sum} onClear={callbacks.onClear}/>
    </LayoutModal>
  )
}

export default React.memo(Basket);
