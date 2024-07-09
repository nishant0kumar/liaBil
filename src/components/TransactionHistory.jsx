import {useState, useEffect} from 'react';

import '../assets/css/history.css'
import { transactionDetails, updateTransactionDetails } from '../assets/data/transaction';

function History(){
    const [transactionState, setTransactionstate] = useState(transactionDetails || []);
    useEffect(() => {
        updateTransactionDetails();
        setTransactionstate(...transactionDetails)
    },[])
    return(
        <div className='history-box'>
            <div className='history-header'>
                <p className='page-name'>Trasaction-History</p>
                <button>ViewAll</button>
            </div>
            <div className='history-categories'>
                {transactionDetails.length === 0 ? (
                    <div className='empty-history'>
                        <h3>NOTHING TO SHOW</h3>
                    </div>
                ):
                (transactionDetails.slice(-10).map((trans, index) => (
                    <div className="categories" key={index}>
                        <div className='history-details'>
                            <div className="cat-logo">{"24"}</div>
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
                )))}
            </div>
        </div>
    )
}

export default History;