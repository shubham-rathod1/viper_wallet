import { createContext, useState } from 'react';

export const AppContext = createContext();

const init = {};

export default function AppContextPrivider({ children }) {

  const value = {
   
  };

  return (
    <div>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </div>
  );
}
