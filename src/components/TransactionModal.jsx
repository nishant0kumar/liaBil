import React from 'react';
import '../assets/css/modal.css'; // Ensure you create and style this CSS file

import {transactionDetails, currentDate} from '../assets/data/transaction.js'
function TransactionModal({ isVisible, onClose, onSubmit }) {
    if (!isVisible) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        transactionDetails.push( {
            // Fetch data from form inputs
            amount: Number(e.target.amount.value),
            description: e.target.description.value,
            catego: e.target.catego.value,
            date: e.target.date.value,
        })   
        onSubmit(transactionDetails);
    };

    return (
        <>
        <p className='page-name center'>Debit</p>
            <div className="modal-overlay">
                <div className="modal-content">
                    <button className="close-button" onClick={onClose}>×</button>
                    <form onSubmit={handleSubmit}>
                        <div className='input-block'>
                            <label>Amount:</label>
                            <input type="number" name="amount" className='input' required />
                        </div>
                        <div className='input-block'>
                            <label>Description:</label>
                            <input type="text" name="description" className='input' required />
                        </div>
                        <div>
                            <label htmlFor="weeks">Category: 
                            <select name="catego" id="weeks">
                                <option value="entertainment" name="catego">Entertainment</option>
                                <option value="travel" name="catego">Travel</option>
                                <option value="study" name="catego">Study</option>
                                <option value="daily" name="catego" default>Daily</option>
                                <option value="food" name="catego" default>Food</option>
                                <option value="others" name="catego">Others</option>
                            </select>
                        </label>
                        </div>
                        <div className='input-block'>
                            <label>Date:</label>
                            <input type="" name="date" className='input' defaultValue={currentDate} />
                        </div>
                        <button type="submit" className='submit-button'>Add Transaction</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default TransactionModal;

