import React from 'react';
import './Home.css';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.png';
import { CurrencyContext } from '../../context/CurrencyApi';

// Home component
const Home = () => {
  const { coins, currency } = useContext(CurrencyContext);
  const [currencyData, setCurrencyData] = useState([]);
  const [search, setSearch] = useState("");

// Function to handle search input
  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setCurrencyData(coins);
    }
  };

// Function to handle search button
  const handleSearchBtn = async (e) => {
    e.preventDefault();
    const searchParts = search.split(" - ");
    const searchTerm = searchParts[0];
    const symbolTerm = searchParts[1];

// Filter the currency data based on the search term
    const fetchCoin = coins.filter((coin) => {
      return (
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (symbolTerm && coin.symbol.toLowerCase().includes(symbolTerm.toLowerCase())) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setCurrencyData(fetchCoin);
  };

// useEffect to update the currency data
  useEffect(() => {
    setCurrencyData(coins);
  }, [coins]);

// Home component
  return (
    <div className="home">
      <div className="home-content">
        <h1><b>C</b>rypto <b>C</b>urrency</h1>
        <img className="logo-banner" src={logo} alt="log" />
        <p>Find the best currency exchange rates</p>
        <form onSubmit={handleSearchBtn}>
          <input
            onChange={handleSearch}
            list="crypto-currency"
            value={search}
            type="text"
            placeholder="Search for your favourite currency ..."
            required
          />

          <datalist id="crypto-currency">
            {currencyData.map((coin, idx) => (
              <option className="option-name" key={idx} value={`${coin.name} - ${coin.symbol}`} />
            ))}
          </datalist>

          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-tb">
        <div className="tb-layout">
          <p>#</p>
          <p>Crypto Currency</p>
          <p>Price</p>
          <p className="high-price">24H Price</p>
          <p>24H Change</p>
        </div>
        {currencyData.slice(0, 20).map((coin, index) => (
          <Link to={`/coin/${coin.id}`} className="tb-layout" key={index}>
            <p>{coin.market_cap_rank}</p>
            <div className="coin-container">
              <img className="coin-logo" src={coin.image} alt={coin.name} />
              <p className="coin-name">{coin.name + " - " + coin.symbol}</p>
            </div>
            <p>{currency.symbol + "  " + coin.current_price.toLocaleString()}</p>
            <p className="high-price">{currency.symbol + " " + coin.high_24h.toLocaleString()}</p>
            <p className={coin.price_change_percentage_24h >= 0 ? "green" : "red"}>
              {Math.floor(coin.price_change_percentage_24h * 100) / 100 + " % "}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;