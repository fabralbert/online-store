import {BasketAction, BasketState, BasketActionTypes } from "./types";

const initialState: BasketState = {
  items: [], //@todo было items: [] as Array<ItemBasket>
  sum: 0,
  totalAmount: 0,
}

 function basketReducer(state = initialState, action: BasketAction): BasketState{
  switch (action.type) {

    case BasketActionTypes.BASKET_ADD:
      return { 
        ...state, 
        items: action.payload.items, 
        sum: action.payload.sum, 
        totalAmount: action.payload.totalAmount,
      };
    case BasketActionTypes.BASKET_REMOVE:
      return { 
        ...state, 
        items: action.payload.items, 
        sum: action.payload.sum, 
        totalAmount: action.payload.totalAmount,
      };

    case BasketActionTypes.BASKET_CLEAR:
      return { 
        ...state, 
        items: [], 
        sum: 0, 
        totalAmount: 0,
      };

    default:
      return state;
  }
}

export default basketReducer