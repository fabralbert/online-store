import React, {useCallback} from "react";
import BasketTotal from "../../components/basket-total";
import LayoutModal from "../../components/layouts/layout-modal";
import ItemBasket from "../../components/item-basket";
import ListBasket from "../../components/list-basket";
import actionsModals from "../../store/modals/actions";
import actionsBasket from "../../store/basket/actions";
import { useAppSelector } from "../../hooks/useTypesSelector"
import { useAppDispatch } from "../../hooks/useTypesDispatch";


// eslint-disable-next-line @typescript-eslint/no-redeclare
interface ItemBasket {
  id: string;
  img: string;
  title: string;
  price: number;
  countLeft: number;
  description: string;
  amount: number;
  selfTotalSum: number;
}

function Basket() {

  const dispatch = useAppDispatch();

  const select = useAppSelector(state => ({
    items: state.basket.items,
    sum: state.basket.sum,
  }));

  // Закрытие любой модалки
  const closeModal = useCallback(() => {
    dispatch(actionsModals.close());
  }, [])
  const onRemove = useCallback((id: string) => {
    dispatch(actionsBasket.removeFromBasket(id));
  }, [])
  const onClear = useCallback(() => {
    dispatch(actionsBasket.clearBasket());
  }, [])

  const renders = {
    itemBasket: useCallback((item: ItemBasket) => (
      <ItemBasket
        item={item}
        link={`/articles/${item.id}`}
        onLink={closeModal}
        onRemove={onRemove}
      />
    ), []),
  }

  return (
    <LayoutModal title={'Корзина'} onClose={closeModal}>
      <ListBasket items={select.items} renderItem={renders.itemBasket}/>
      <BasketTotal sum={select.sum} onClear={onClear}/>
    </LayoutModal>
  )
}

export default React.memo(Basket);
