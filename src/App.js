import { useContext, useEffect } from 'react';
import Header from './core/header';
import OpenRoutes from './routes';
import { Connection } from '@solana/web3.js';
import { AppContext } from './store/context';
import { loadData } from './store/localStorage';

function App() {
  const { setConnection, setWallets } = useContext(AppContext);

  const defaultNetwork = () => {
    const connect = new Connection(
      'https://api.devnet.solana.com',
      'confirmed'
    );
    setConnection(connect);
  };

  useEffect(() => {
    defaultNetwork();
    if (loadData('accounts') !== null) {
      setWallets(loadData('accounts'));
    }
  }, []);
  return (
    <>
      <div style={{height:"500px"}}>
        <Header />
        <OpenRoutes />
      </div>
    </>
  );
}

export default App;
