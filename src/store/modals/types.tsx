export enum ModalActionTypes {
  MODAL_OPEN = 'MODAL/OPEN',
  MODAL_CLOSE = 'MODAL/CLOSE',
}

interface Payload {
  name: string;
}
interface ModalOpenAction {
  type: ModalActionTypes.MODAL_OPEN;
  payload: Payload;
}

interface ModalCloseAction {
  type: ModalActionTypes.MODAL_CLOSE;
}

export type ModalAction = ModalOpenAction | ModalCloseAction

export interface ModalState {
  name: string | null
}