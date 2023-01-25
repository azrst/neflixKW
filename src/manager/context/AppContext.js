import React, {createContext, useContext, useState} from 'react';

const Context = createContext();

export function UIProvider({children}) {
  const [yCoordinate, setYCoordinate] = useState(0);
  const [modalSignIn, setModalSignIn] = useState(false);
  const [modalSignUp, setModalSignUp] = useState(false);

  const UIValues = {
    modalSignIn,
    setModalSignIn,
    modalSignUp,
    setModalSignUp,

    yCoordinate,
    setYCoordinate,
  };

  return <Context.Provider value={UIValues}>{children}</Context.Provider>;
}

export function useUIContext() {
  return useContext(Context);
}
