import React, { useEffect, useState, useContext } from 'react';
import './CoinChart.css';
import Chart from 'react-google-charts';
import { CurrencyContext } from '../../context/CurrencyApi';

const CoinChart = ({ coinChart }) => {
  const [coinLineChart, setLineCoinChart] = useState([["Date", "Price"]]);
  const { currency } = useContext(CurrencyContext);

  useEffect(() => {
    let chartData = [["Date", "Price"]];
    if (coinChart && coinChart.prices) {
      coinChart.prices.forEach((price) => {
        chartData.push([new Date(price[0]).toLocaleDateString().slice(0, -5), price[1]]);
      });
      setLineCoinChart(chartData);
    }
  }, [coinChart]);

  const options = {
    title: "Coin Price Chart",
    chartArea: { width: "80%", height: "70%" },
    colors: ["#ff6600", "#ffab91"],
    hAxis: {
      title: `Price in ${currency.name.toUpperCase()}`,
      minValue: 0,
    },
    vAxis: {
      title: "Date",
    },
    legend: { position: 'bottom' },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="chart-container">
      <Chart
        className="chart"
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={coinLineChart}
        options={options}
      />
    </div>
  );
};

export default CoinChart;
