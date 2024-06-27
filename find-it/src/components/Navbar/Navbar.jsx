import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../assets/logo1.png';
import { Outlet, Link } from "react-router-dom";
import { CurrencyContext } from '../../context/CurrencyApi.jsx';

const Navbar = () => {
    const { setCurrency } = useContext(CurrencyContext);

    const handleCurrencyChange = (event) => {
        switch (event.target.value) {
            case 'usd':
                setCurrency({ name: 'usd', symbol: '$' });
                break;
            case 'eur':
                setCurrency({ name: 'eur', symbol: '€' });
                break;
            case 'sar':
                setCurrency({ name: 'sar', symbol: 'SAR' });
                break;
            default:
                setCurrency({ name: 'usd', symbol: '$' });
                break;
        }
    };

    return (
        <div className="navbar">
            <Link to="/home" className="nav-left">
                <img className="logo" src={logo} alt="Logo" />
                <h1><b>F</b>ind<b> I</b>t</h1>
            </Link>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/exchange">Exchange Rates</Link></li>
                <li><Link to="/info">Info</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <div className="nav-right">
                <select onChange={handleCurrencyChange}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="sar">ر.س</option>
                </select>
                <button>New features later</button>
            </div>
        </div>
    )
}

export default Navbar;
