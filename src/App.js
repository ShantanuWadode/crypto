import React, { useState } from 'react';
import './App.css';

function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [balance, setBalance] = useState(null);

  const connectWallet = async () => {
    // Simulating wallet connection
    setWalletConnected(true);

    // Fetch balance from the wallet (simulated)
    const simulatedBalance = "10 ETH";
    setBalance(simulatedBalance);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Wallet</h1>
        {!walletConnected ? (
          <button onClick={connectWallet} className="connect-btn">
            Connect Wallet
          </button>
        ) : (
          <div className="wallet-info">
            <p>Wallet Connected</p>
            <p>Balance: {balance}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
