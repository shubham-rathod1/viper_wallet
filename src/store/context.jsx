import { createContext, useState } from 'react';

export const AppContext = createContext();

// const WalletInit = {};

export default function AppContextPrivider({ children }) {
  const [wallets, setWallets] = useState([]);
  const [connection, setConnection] = useState(null);
  const [currentBalance, setCurrentBalance] = useState(null);

  const value = {
    wallets,
    setWallets,
    setConnection,
    connection,
    setCurrentBalance,
    currentBalance,
  };

  return (
    <div>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </div>
  );
}
