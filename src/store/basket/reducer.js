// Начальное состояние товара
const initialState = {
  items: [],
  sum: 0,
  totalAmount: 0,
}

 function basketReducer(state = initialState, action){
  switch (action.type) {

    case "basket/add":
      return { 
        ...state, 
        items: action.payload.items, 
        sum: action.payload.sum, 
        totalAmount: action.payload.totalAmount
      };

    default:
      return state;
  }
}

export default basketReducer