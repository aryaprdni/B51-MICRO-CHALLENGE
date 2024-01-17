import { useState } from 'react';
import styles from '../styles/CurrencyCovenvert.module.css'

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('IDR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const exchangeRates = {
    IDR: { USD: 0.000071, GBP: 0.000051, EUR: 0.000058 },
    USD: { IDR: 14014, GBP: 0.72, EUR: 0.82 },
    GBP: { IDR: 19474, USD: 1.39, EUR: 1.13 },
    EUR: { IDR: 17253, USD: 1.22, GBP: 0.88 },
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const convertCurrency = () => {
    const inputAmount = parseFloat(amount);
    if (isNaN(inputAmount) || inputAmount <= 0) {
      alert('Please enter a valid positive number for the amount.');
      return;
    }

    if (!exchangeRates[fromCurrency] || !exchangeRates[fromCurrency][toCurrency]) {
      alert('Invalid currency selection.');
      return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const result = inputAmount * rate;
    setConvertedAmount(result.toFixed(2));
  };

  return (
    <div className={styles.container}>
        <h1>Currency Converter</h1>
        <div className={styles.inputBox}>
            <div>
                <label>
                <p>Amount :</p>
                <input type="number" value={amount} onChange={handleAmountChange} />
                </label>
            </div>

            <div>
                <label>
                <p>From Currency :</p>
                <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                    <option value="IDR">IDR</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
                </label>
            </div>

            <div>
                <label>
                <p>To Currency:</p>
                <select value={toCurrency} onChange={handleToCurrencyChange}>
                    <option value="IDR">IDR</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
                </label>
            </div>

            <button onClick={convertCurrency}>Convert</button>
            <p>Converted Amount: {convertedAmount} {toCurrency}</p>
        </div>
    </div>
  );
};

export default CurrencyConverter;
