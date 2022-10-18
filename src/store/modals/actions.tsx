 const actionsModals = {
  open: (name:string) => {
    return {type: 'modal/open', payload: {name}};
  },
  close: () => {
    return {type: 'modal/close'}
  }
}

export default actionsModals