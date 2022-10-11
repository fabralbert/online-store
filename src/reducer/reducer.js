export const userDataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_DATA': {
      return {
        data: action.payload.data,
        AllInputs: action.payload.allInputs,
      }
    }
    default:
      return state
  }
}
