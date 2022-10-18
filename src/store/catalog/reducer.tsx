
interface Payload {
  data: []         // @todo
}

interface Action {
    type: string;
    payload: Payload;
}

const initialState = {
  items: [],
  isLoading: false,
}

function catalogReducer(state = initialState, action: Action){
  switch (action.type) {
    case "catalog/load":
      return { ...state, items: [], isLoading: true};

    case "catalog/load-success":
      return { ...state, items: action.payload.data, isLoading: false};

    case "catalog/load-error":
      return { ...state, items: [], isLoading: false};

    default:
      return state;
  }
}

export default catalogReducer