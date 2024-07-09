import React from 'react';
import '../assets/css/modal.css'; // Ensure you create and style this CSS file

import {monthlyMoney, currentDate, currentMonth} from '../assets/data/transaction.js'
function TransactionCredit({ isVisible, onClose, onSubmit }) {
    if (!isVisible) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        monthlyMoney.push( {
            // Fetch data from form inputs
            mAmount: Number(e.target.amount.value),
            month: e.target.month.value,
            date: e.target.date.value,
        })   
        onSubmit(monthlyMoney);
    };

    return (
        <>
        <p className='page-name center'>Credit</p>
            <div className="modal-overlay">
                <div className="modal-content">
                    <button className="close-button" onClick={onClose}>×</button>
                    <form onSubmit={handleSubmit}>
                        <div className='input-block'>
                            <label>Amount:</label>
                            <input type="number" name="amount" className='input' required />
                        </div>
                        <div className='input-block'>
                            <label>Month:</label>
                            <input type="" name="month" className='input' value={currentMonth} required />
                        </div>
                        {/* <div>
                            <label htmlFor="weeks">Category: 
                            <select name="catego" id="weeks">
                                <option value="entertainment" name="catego">Entertainment</option>
                                <option value="travel" name="catego">Travel</option>
                                <option value="study" name="catego">Study</option>
                                <option value="daily" name="catego" default>Daily</option>
                                <option value="other" name="catego">Other</option>
                            </select>
                        </label>
                        </div> */}
                        <div className='input-block'>
                            <label>Date:</label>
                            <input type="" name="date" className='input' value={currentDate} />
                        </div>
                        <button type="submit" className='submit-button'>Add Transaction</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default TransactionCredit;

