import {ModalActionTypes, ModalAction, ModalState} from "./types"

// Начальное состояние для управления модалками
const initialState: ModalState = {
  name: ''
}

function modalReducer(state = initialState, action: ModalAction): ModalState{
  switch (action.type) {
    case ModalActionTypes.MODAL_OPEN:
      return { ...state, name: action.payload.name};
    case ModalActionTypes.MODAL_CLOSE:
      return { ...state, name: null };
    default:
      return state;
  }
}

export default modalReducer