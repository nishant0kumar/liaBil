import React, { useState } from 'react';
import '../assets/css/footer.css';
import TransactionModal from './TransactionModal'; // Adjust the path as needed
import {updateTransactionDetails} from '../assets/data/transaction.js';
function Footer() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleAddTransaction = () => {
        setIsModalVisible(true);
    };

    const handleAddNew = () => {
        setIsModalVisible(true);
    };

    const handleUpdateTransaction = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    const handleSubmitTransaction = (transactionDetails) => {
        console.log("New transaction data: ", transactionDetails);
        updateTransactionDetails();
        // Add your logic for submitting the transaction here
        setIsModalVisible(false);
    };

    return (
        <>
        <TransactionModal 
                isVisible={isModalVisible} 
                onClose={handleCloseModal} 
                onSubmit={handleSubmitTransaction} 
            />
            <div className="footer">
                <div className="Add-trans trans" onClick={handleAddTransaction}>
                    <p title="Add Transaction">AT+</p>
                </div>
                <div title="Add New" className="plus-new" onClick={handleAddNew}>+</div>
                <div className="update-trans trans" onClick={handleUpdateTransaction}>
                    <p title="Update Transaction">UT+</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
