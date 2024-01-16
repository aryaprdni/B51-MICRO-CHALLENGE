/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from '../styles/SalaryCalculating.module.css';

const SalaryCalculating = () => {
    const [currentBasicSalary, setCurrentBasicSalary] = useState(0);
    const [basicSalary, setBasicSalary] = useState(0);
    const [allowance, setAllowance] = useState(0);
    const [monthlyExpenses, setMonthlyExpenses] = useState(0);
    const [totalSalary, setTotalSalary] = useState(0);
    const [netSalary, setNetSalary] = useState(0);
    const [grossSalary, setGrossSalary] = useState(0);

    const calculateSalary = () => {
    const calculatedGrossSalary = currentBasicSalary + allowance;
    const calculatedNetSalary = calculatedGrossSalary - monthlyExpenses;

    setBasicSalary(currentBasicSalary);
    setGrossSalary(calculatedGrossSalary);
    setNetSalary(calculatedNetSalary);
    setTotalSalary(calculatedNetSalary);
};

const resetInputs = () => {
    setCurrentBasicSalary(0);
    setBasicSalary(0);
    setAllowance(0);
    setMonthlyExpenses(0);
    setTotalSalary(0);
    setNetSalary(0);
    setGrossSalary(0);
};

return (
    <div className={styles.container}>
        <h1>Salary Calculating</h1>
        <div className={styles.subContainer}>
            <div className = {styles.box1}>
                <label>
                    <p>Basic Salary :</p>
                    <input
                    type="text"
                    value={currentBasicSalary === 0 ? '0' : currentBasicSalary.toString()}
                    onChange={(e) => setCurrentBasicSalary(e.target.value === '0' ? 0 : parseInt(e.target.value, 10) || 0)}
                    />
                </label>    
                <label>
                    <p>Allowance :</p>
                    <input
                    type="text"
                    value={allowance === 0 ? '0' : allowance.toString()}
                    onChange={(e) => setAllowance(e.target.value === '0' ? 0 : parseInt(e.target.value, 10) || 0)}
                    />
                </label>
                <label>
                    <p>Monthly Expenses :</p>
                    <input
                    type="text"
                    value={monthlyExpenses === 0 ? '0' : monthlyExpenses.toString()}
                    onChange={(e) => setMonthlyExpenses(e.target.value === '0' ? 0 : parseInt(e.target.value, 10) || 0)}
                    />
                </label>
                <div className ={styles.buttonContainer}>
                    <button className={styles.button} onClick={calculateSalary}>Count</button>
                    <button className={styles.button} onClick={resetInputs}>Reset</button>
                </div>
                <br />
            </div> 
            <div className={styles.box2}>
                <h3>Results :</h3>
                <p>Gross Salery: {grossSalary}</p>
                <p>Basic Salary : {basicSalary}</p>
                <p>Net Salary : {netSalary}</p>
            </div>
        </div>
    </div>

  );
};

export default SalaryCalculating;