
interface Item { 
  id: string; 
  amount?: number; 
  price: number; 
  selfTotalSum: number;
}

interface Payload {
  items: Item[];
  sum: number;
  totalAmount: number;
}

interface Action {
    type: string;
    payload: Payload;
}

const initialState = {
  items: [],
  sum: 0,
  totalAmount: 0,
}

 function basketReducer(state = initialState, action: Action){
  switch (action.type) {

    case "basket/add":
      return { 
        ...state, 
        items: action.payload.items, 
        sum: action.payload.sum, 
        totalAmount: action.payload.totalAmount,
      };
    case "basket/remove":
      return { 
        ...state, 
        items: action.payload.items, 
        sum: action.payload.sum, 
        totalAmount: action.payload.totalAmount,
      };

    case "basket/clear":
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