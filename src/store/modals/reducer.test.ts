import {ModalState, ModalActionTypes} from "./types"
import CatalogReducer from "./reducer"

let state: ModalState;

beforeEach(() => {
  state = {
    name: ''
  }
})

describe("Catalog reducer", () => {

  it("Should be not empty name on open modal", () => {

    const data = {
      name: 'basket'
    }
    
    const payload = {
      name: 'basket'
    }

    const newState = CatalogReducer(state, {type: ModalActionTypes.MODAL_OPEN, payload})
    expect(newState).toEqual(data);
  });

  it("Name should be null on close modal", () => {

    const data = {
      name: null
    }
    
    const newState = CatalogReducer(state, {type: ModalActionTypes.MODAL_CLOSE})
    expect(newState).toEqual(data);
  });

});


    


