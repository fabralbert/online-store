export enum BasketActionTypes {
  BASKET_ADD = 'BASKET/ADD',
  BASKET_REMOVE = 'BASKET/REMOVE',
  BASKET_CLEAR = 'BASKET/CLEAR',
}

export interface BasketAddAction {
  type: BasketActionTypes.BASKET_ADD;
  payload: Payload;
}

interface BasketRemoveAction {
  type: BasketActionTypes.BASKET_REMOVE;
  payload: Payload;
}
interface BasketClearAction {
  type: BasketActionTypes.BASKET_CLEAR;
}

interface ItemBasket {
  amount: number;
  description: string;
  id: string;
  img: string;
  price: number;
  selfTotalSum: number;
  title: string;
  countLeft: number;
}

interface Payload {
  items: ItemBasket[]; // ИСПРАВИТЬ ПОСМОТРЕТЬ НА ТОМ ПРОЕКТЕ ЧТО КОНКРЕТНО В ПЕЙЛЛОАД ПРИХОДИТ
  sum: number;
  totalAmount: number;
}

export interface BasketState {
  items: ItemBasket[];
  sum: number;
  totalAmount: number;
}

export type BasketAction = BasketAddAction | BasketRemoveAction | BasketClearAction