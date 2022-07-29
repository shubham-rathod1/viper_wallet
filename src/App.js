import { useContext, useEffect } from 'react';
import Header from './core/header';
import OpenRoutes from './routes';
import { Connection } from '@solana/web3.js';
import { AppContext } from './store/context';

function App() {
  const { setConnection } = useContext(AppContext);

  const defaultNetwork = () => {
    const connect = new Connection(
      'https://api.devnet.solana.com',
      'confirmed'
    );
    setConnection(connect);
  };

  useEffect(() => {
    defaultNetwork();
  }, []);
  return (
    <>
      <div>
        <Header />
        <OpenRoutes />
      </div>
    </>
  );
}

export default App;
