import { useState, useEffect } from 'react';

import '../assets/css/history.css';
import { transactionDetails, updateTransactionDetails } from '../assets/data/transaction';

function History() {
    const [transactionState, setTransactionState] = useState(transactionDetails || []);

    useEffect(() => {
        updateTransactionDetails();
        setTransactionState(transactionDetails);
    }, []);

    const renderCategoryLogo = (category) => {
        if (category === 'entertainment') {
            return (
                <button className='delete-trans'>
                    <i className='fa-solid fa-gamepad'></i>
                </button>
            );
        }
        else if (category === 'travel') {
            return (
                <button className='delete-trans'>
                    <i className='fa-solid fa-mountain-city'></i>
                </button>
            );
        }
        else if (category === 'study') {
            return (
                <button className='delete-trans'>
                    <i className='fa-solid fa-graduation-cap'></i>
                </button>
            );
        }
        else if (category === 'food') {
            return (
                <button className='delete-trans'>
                    <i className='fa-solid fa-plate-wheat'></i>
                </button>
            );
        }
        else if (category === 'daily') {
            return (
                <button className='delete-trans'>
                    <i className='fa-solid fa-bag-shopping'></i>
                </button>
            );
        }
        else if (category === 'others') {
            return (
                <button className='delete-trans'>
                    <i className='fa-solid fa-trailer'></i>
                </button>
            );
        }
        return null;
    };

    return (
        <div className='history-box'>
            <div className='history-header'>
                <p className='page-name'>Transaction History</p>
                <button>View All</button>
            </div>
            <div className='history-categories'>
                {transactionState.length === 0 ? (
                    <div className='empty-history'>
                        <h3>NOTHING TO SHOW</h3>
                    </div>
                ) : (
                    transactionState.slice(0, 10).reverse().map((trans, index) => (
                        <div className={`categories ${trans.catego}`} key={index}>
                            <div className='history-details'>
                                <div className="cat-logo">
                                    {renderCategoryLogo(trans.catego)}
                                </div>
                                <div className='cat-name'>
                                    <p>{trans.catego}</p>
                                    <p className='light'>{trans.description}</p>
                                </div>
                            </div>
                            <div className="amount-cat">
                                <p>{trans.amount}</p>
                                <p className='light'>{trans.date}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default History;
