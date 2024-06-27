import React, { useState, useEffect } from 'react';
import './Exchange.css';
import { TailSpin } from 'react-loader-spinner';

const Exchange = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchExchange = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': import.meta.env.VITE_API_KEY }
    };

    try {
      const response = await fetch('https://api.coingecko.com/api/v3/exchange_rates', options);
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
      }
      const data = await response.json();
      setExchangeRates(data.rates);
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExchange();
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
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1><span>E</span>xchange Rates</h1>
      <div className="exchange-rates">
        {Object.keys(exchangeRates).map((key) => (
          <div key={key} className="exchange-rate">
            <h2>{exchangeRates[key].name} ({exchangeRates[key].unit})</h2>
            <p>Value: {exchangeRates[key].value}</p>
            <p>Type: {exchangeRates[key].type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exchange;
