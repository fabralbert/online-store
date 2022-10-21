import modalArticle from "./actions"
import { ModalActionTypes } from "./types";

describe('Modal actions', () => {
  it('should create an action with type "modal open"', () => {
  
    const expectation = {
      type: ModalActionTypes.MODAL_OPEN,
      payload: {
        name: 'modal'
      }
    };
  
    expect(modalArticle.open('modal')).toEqual(expectation);
  })

  it('should create an action with type "modal close"', () => {
  
    const expectation = {
      type: ModalActionTypes.MODAL_CLOSE,
    };
  
    expect(modalArticle.close()).toEqual(expectation);
  })
})
