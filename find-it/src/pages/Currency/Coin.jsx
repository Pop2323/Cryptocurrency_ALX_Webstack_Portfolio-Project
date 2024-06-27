import React, { useState, useEffect, useContext } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom';
import { CurrencyContext } from '../../context/CurrencyApi';
import { TailSpin } from 'react-loader-spinner';
import CoinChart from '../../components/CoinChart/CoinChart';

const Coin = () => {
  const { coinId } = useParams();
  const [coin, setCoin] = useState(null);
  const [coinChart, setCoinChart] = useState(null);
  const { currency } = useContext(CurrencyContext);

  const fetchCoin = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': import.meta.env.VITE_API_KEY }
    };

    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
      if (!response.ok) {
        throw new Error('Failed to fetch coin data');
      }
      const data = await response.json();
      setCoin(data);
    } catch (error) {
      console.error('Error fetching coin data:', error);
      setCoin(null);
    }
  };

  const fetchCoinChart = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': import.meta.env.VITE_API_KEY }
    };

    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`, options);
      if (!response.ok) {
        throw new Error('Failed to fetch coin chart data');
      }
      const data = await response.json();
      setCoinChart(data);
    } catch (error) {
      console.error('Error fetching coin chart data:', error);
      setCoinChart(null);
    }
  };

  useEffect(() => {
    fetchCoin();
    fetchCoinChart();
  }, [currency]);

  const truncateDescription = (description, maxLines) => {
    if (!description) return '';

    const sentences = description.split(/[.!?\n]/).filter(Boolean);
    const truncatedSentences = sentences.slice(0, maxLines);
    return truncatedSentences.join('.') + '.';
  };

  // Render coin details once data is fetched
  if (coin && coinChart) {
    return (
      <div className="container">
        <div className="coin">
          <img src={coin.image.small} alt={coin.name} />
          <h1>{coin.name}</h1>
          <h2>{coin.symbol.toUpperCase()}</h2>
          <p><span>Genesis Date:</span> {coin.genesis_date}</p>
          <div className="coin-chart">
            <CoinChart coinChart={coinChart} />
          </div>
          <p id="description">{truncateDescription(coin.description.en, 4)}</p>
          <p><span>Current Price:</span> {currency.symbol} {coin.market_data.current_price[currency.name]}</p>
          <p><span>Market Cap Rank:</span> {coin.market_cap_rank}</p>
          <p><span>Market Cap:</span> {currency.symbol}{coin.market_data.market_cap[currency.name]}</p>
          <p><span>Market Cap Change (24h):</span> {coin.market_data.market_cap_change_percentage_24h}<span> %</span></p>
          <p><span>Hashing Algorithm:</span> {coin.hashing_algorithm ? coin.hashing_algorithm : "Not-Found"}</p>
        </div>
      </div>
    );
  } else {
    // Show spinner while fetching data
    return (
      <div className="spinner">
        <TailSpin
          color="#ff6600"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  }
};

export default Coin;