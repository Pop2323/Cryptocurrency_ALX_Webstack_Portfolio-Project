import React, { useState, useEffect } from 'react';
import './Info.css';
import { TailSpin } from 'react-loader-spinner';

const Info = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        // Fetch description.json from public folder (for production) or import directly (in development)
        const response = await fetch('/description.json');
        if (!response.ok) {
          throw new Error('Failed to fetch description data');
        }
        const data = await response.json();
        setCoins(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching description data:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  if (loading) {
    return (
      <div className="spinner-container">
        <TailSpin
          color="#ff6600"
          height={80}
          width={80}
          timeout={3000}
        />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="Container">
        <div className="head">
      <h1><span>I</span>nfo</h1>
      <p>Find the best information on Crypto-Currencies</p>
      </div>
      <div className="coin-info">
        {Object.keys(coins).map((coinName) => (
          <div key={coinName} className="coin-details">
            <h2>{coinName}</h2>
            <p>{coins[coinName]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
