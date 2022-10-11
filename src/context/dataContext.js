import React, { useReducer, createContext, useMemo } from "react";
export const DataContext = createContext(); 

export const ACTIONS = {
  SAVE_DATA: 'SAVE_DATA',
};

const initialState = {
  data: {},
  AllInputs: []
};
const userDataReducer = (state = {}, action) => {
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
};
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userDataReducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  
  return (
      <DataContext.Provider value={contextValue}>
        {children}
      </DataContext.Provider>
    );
};