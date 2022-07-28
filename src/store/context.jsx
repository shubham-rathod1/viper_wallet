import { createContext, useState } from 'react';

export const AppContext = createContext();

// const WalletInit = {};

export default function AppContextPrivider({ children }) {
  const [wallets, setWallets] = useState([]);

  const value = {
    wallets,
    setWallets,
  };

  return (
    <div>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </div>
  );
}
