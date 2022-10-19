import { 
  BASKET_ADD, 
  BASKET_REMOVE, 
  BASKET_CLEAR,
} from "../constants";

interface Item { 
  id: string; 
  amount: number; 
  price: number; 
  selfTotalSum: number;
}

interface Payload {
  items: Array<Item>;
  sum: number;
  totalAmount: number;
}

interface Action {
  type: string;
  payload: Payload;
}

const initialState = {
  items: [] as Array<Item>,
  sum: 0,
  totalAmount: 0,
}

 function basketReducer(state = initialState, action: Action){
  switch (action.type) {

    case BASKET_ADD:
      return { 
        ...state, 
        items: action.payload.items, 
        sum: action.payload.sum, 
        totalAmount: action.payload.totalAmount,
      };
    case BASKET_REMOVE:
      return { 
        ...state, 
        items: action.payload.items, 
        sum: action.payload.sum, 
        totalAmount: action.payload.totalAmount,
      };

    case BASKET_CLEAR:
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