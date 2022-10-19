import { 
  CATALOG_LOAD, 
  CATALOG_LOAD_SUCCESS, 
  CATALOG_LOAD_ERROR,
} from "../constants";

interface Item {
  id: string;
  title: string;
  price: number;
  img: string;
  description: string;
  countLeft: number;
}

interface Payload {
  data: Array<Item>        // @todo
}

interface Action {
    type: string;
    payload: Payload;
}

const initialState = {
  items: [] as Array<Item>,
  isLoading: false,
}

function catalogReducer(state = initialState, action: Action){
  switch (action.type) {
    case CATALOG_LOAD:
      return { ...state, items: [], isLoading: true};

    case CATALOG_LOAD_SUCCESS:
      return { ...state, items: action.payload.data, isLoading: false};

    case CATALOG_LOAD_ERROR:
      return { ...state, items: [], isLoading: false};

    default:
      return state;
  }
}

export default catalogReducer