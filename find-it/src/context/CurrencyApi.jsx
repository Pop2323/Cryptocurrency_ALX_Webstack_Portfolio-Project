import { createContext, useContext, useState, useEffect } from 'react';

// Create the CurrencyContext
export const CurrencyContext = createContext();

const CurrencyApi = (props) => {
    const [coins, setCoins] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$",
    });

    // Function to fetch currency data
    const fetchCurrencyData = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': import.meta.env.VITE_API_KEY }
        };

        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options);
            const data = await response.json();
            setCoins(data);
        } catch (error) {
            console.error('Error fetching currency data:', error);
        }
    };

    useEffect(() => {
        fetchCurrencyData();
    }, [currency]);

    // Context value to be provided to consumers
    const contextVal = {
        coins,
        currency,
        setCurrency,
    };

    return (
        <CurrencyContext.Provider value={contextVal}>
            {props.children}
        </CurrencyContext.Provider>
    );
};

export default CurrencyApi;
