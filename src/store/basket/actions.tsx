import { Dispatch } from "redux";
import { RootState } from "..";

import { BasketAction, BasketActionTypes } from "./types";

const actionsBasket = {

  addToBasket: (id: string) => {
    return (dispatch: Dispatch, getState: () => RootState) => {

      let sum = 0;
      // Ищем товар в корзие, чтобы увеличить его количество. Заодно получаем новый массив items
      let exists = false;
      
      // eslint-disable-next-line array-callback-return
      const items = getState()?.basket.items.map((item) => {
        
        let result = item;
        // в случае если нашли наш товар
        if (item.id === id && item.amount) {
          exists = true;
          result = {...item, amount: item.amount + 1, selfTotalSum: item.price + item.selfTotalSum};
        }
        // Добавляея в общую сумму
        if (result.amount) {
          sum += result.price * result.amount;
          return result
        }
      });

      // Если товар не был найден в корзине, то добавляем его из каталога
      if (!exists) {
        // Поиск товара в каталоге
        const item = getState()?.catalog.items.find((item) => item.id === id);
        
        if (!item){
          return
        }

        items.push({...item, amount: 1, selfTotalSum: item.price});
        // Досчитываем сумму
        sum += item.price;
      }

      dispatch({type: BasketActionTypes.BASKET_ADD, payload: {items, sum, totalAmount: items.length}});
    }
  },

  removeFromBasket: (id: string) => {
      return (dispatch: Dispatch<BasketAction>, getState: () => RootState) => {
      const item = getState()?.basket.items.find((item) => item.id === id)

      let items;

      
      if (item && item.amount > 1){
        items = getState()?.basket.items.map((item) => {
            if (item.id === id){
              return {...item, amount: item.amount - 1, selfTotalSum: item.selfTotalSum - item.price}
            }
            return item
          }
        )
      }
      else {
        const newItems = getState()?.basket.items.filter((item) => item.id !== id)

        items = newItems?.map((item) => {
          return {...item}
        })
      }
      
      const sum = items?.reduce((acc, item) => {
        return item.amount * item.price + acc
      }, 0)


      dispatch({type: BasketActionTypes.BASKET_REMOVE, payload: {items, sum, totalAmount: items?.length}});
    }
  },
  clearBasket: () => {
    return {type: BasketActionTypes.BASKET_CLEAR}
  }
}

export default actionsBasket;


