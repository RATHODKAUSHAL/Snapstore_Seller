import React, { createContext } from 'react'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const url = "http://127.0.0.1:8000"

    const contextvalue = {
        url
    }

  return (
    <StoreContext.Provider value={contextvalue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
