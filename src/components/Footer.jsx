import React, { useState } from 'react';
import '../assets/css/footer.css';
import TransactionModal from './TransactionModal';
import TransactionCredit from './TransactionCredit.jsx';
import { updateTransactionDetails } from '../assets/data/transaction.js';

function Footer({ onAddTransaction }) {
    const [isCreditModalVisible, setIsCreditModalVisible] = useState(false);
    const [isDebitModalVisible, setIsDebitModalVisible] = useState(false);

    const handleAddCreditTransaction = () => {
        setIsCreditModalVisible(true);
    };

    const handleAddDebitTransaction = () => {
        setIsDebitModalVisible(true);
    };

    const handleCloseCreditModal = () => {
        setIsCreditModalVisible(false);
    };

    const handleCloseDebitModal = () => {
        setIsDebitModalVisible(false);
    };

    const handleSubmitCreditTransaction = (transactionDetails) => {
        console.log("New credit transaction data: ", transactionDetails);
        updateTransactionDetails();
        setIsCreditModalVisible(false);
    };

    const handleSubmitDebitTransaction = (transactionDetails) => {
        console.log("New debit transaction data: ", transactionDetails);
        updateTransactionDetails();
        setIsDebitModalVisible(false);
    };

    return (
        <>
            <div className='bottom-menu'>
                <TransactionModal
                    isVisible={isDebitModalVisible}
                    onClose={handleCloseDebitModal} 
                    onSubmit={handleSubmitDebitTransaction} 
                />
                <TransactionCredit
                    isVisible={isCreditModalVisible}
                    onClose={handleCloseCreditModal} 
                    onSubmit={handleSubmitCreditTransaction} 
                />
                <div className="footer">
                    <div className="add-trans" onClick={handleAddCreditTransaction}>
                        <p title="Add Credit Transaction" className='trans'>Credit</p>
                    </div>
                    <div title="Add Debit Transaction" className="add-trans add-plus" onClick={handleAddDebitTransaction}>
                        <p title="Add Debit Transaction" className='trans'>Debit</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
