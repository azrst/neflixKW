import React, {createContext, useContext, useState} from 'react';

const Context = createContext();

export function UIProvider({children}) {
  const [yCoordinate, setYCoordinate] = useState(0);
  const [translucent, setTranslucent] = useState(true);

  const UIValues = {
    yCoordinate,
    setYCoordinate,
    translucent,
    setTranslucent,
  };

  return <Context.Provider value={UIValues}>{children}</Context.Provider>;
}

export function useUIContext() {
  return useContext(Context);
}
