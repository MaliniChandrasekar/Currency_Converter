import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bg from "./bg.jpg"

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('INR');
  const [exchangeRates, setExchangeRates] = useState({});
  const [convertedAmount, setConvertedAmount] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        setExchangeRates(response.data.rates);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
        setError('Failed to fetch exchange rates');
      }
    };
    fetchExchangeRates();
  }, []);

  const handleConvert = () => {
    const rate = exchangeRates[targetCurrency] / exchangeRates[baseCurrency];
    const converted = amount * rate;
    setConvertedAmount(converted.toFixed(2));
  };

const bg1 = {
    top : "140px",
    left : "100px",
    height : "280px",
    width : "400px",
    border : "1px solid",
    borderRadius : "10px",
    padding : "30px",
    background : "linear-gradient(to right,white, #f3c6f2,#f3c6f2,violet)",
    boxShadow : "10px 10px 10px black"
}

  return (
    <div className="position-relative">
    <img src={bg} style={{ width: "100%", height: "640px" }} alt="Background Image" />
    <div className="position-absolute" style={bg1}> {/* Position content at top-left corner */}
      <h4 className='text-center'>Currency Converter</h4><br></br>
      <input type="number" placeholder='Type your input here' value={amount} onChange={(e) => setAmount(e.target.value)} />
       
      <select className='m-2' value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
        {Object.keys(exchangeRates).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
        {Object.keys(exchangeRates).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select><br></br><br></br>
     <center><button onClick={handleConvert} style={{padding : "5px"}}>Convert</button></center> <br></br>
      <center><input value={error ? error : convertedAmount} placeholder='Your answer is here'/></center> 
    </div>
  </div>
    );
};

export default CurrencyConverter;
