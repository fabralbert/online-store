import {CatalogActionTypes, CatalogAction, CatalogState} from "./types"

const initialState: CatalogState = {
  items: [],
  isLoading: false,
}

function catalogReducer(state = initialState, action: CatalogAction): CatalogState{
  switch (action.type) {
    case CatalogActionTypes.CATALOG_LOAD:
      return { ...state, items: [], isLoading: true};

    case CatalogActionTypes.CATALOG_LOAD_SUCCESS:
      return { ...state, items: action.payload.data, isLoading: false};

    case CatalogActionTypes.CATALOG_LOAD_ERROR:
      return { ...state, items: [], isLoading: false};

    default:
      return state;
  }
}

export default catalogReducer