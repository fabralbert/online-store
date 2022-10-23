import { 
  MODAL_OPEN, 
  MODAL_CLOSE, 
} from "../constants";
 
 const actionsModals = {
  open: (name:string) => {
    return {type: MODAL_OPEN, payload: {name}};
  },
  close: () => {
    return {type: MODAL_CLOSE}
  }
}

export default actionsModals