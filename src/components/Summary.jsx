import '../assets/css/summary.css';
import History from './TransactionHistory';

import {transactionDetails, monthlyMoney} from '../assets/data/transaction.js'
function Summary() {
    let expense = 0;

    transactionDetails.forEach(element => {

        expense += element.amount;
    });
    let total = 10000;
    let perRem = (expense/total)*100
    return(
        <div className='summary'>
            <p className='page-name' style={{marginBottom:20}}>Summary</p>
            <div className="summary-details">
                <div className="expense-summary summary-ei">
                    <div className='round-visualise'>
                        <h2>{perRem}%</h2>
                    </div>
                    <div className="month-expense">
                        <p>Total expense</p>
                        <div className="expense-month">
                            <div className="last-month">
                                <p className='month-header'>Last month</p>
                                <p>${expense}</p>
                            </div>
                            <div className="this-month">
                                <p className='month-header'>This month</p>
                                <p>$500</p>
                            </div>
                        </div>
                    </div>
                    <div className="button-expense">
                        <button>{">"}</button>
                    </div>
                </div>
                <div className="income-summary summary-ei">
                    <div className='round-visualise'>
                        <h2>45%</h2>
                    </div>
                    <div className="month-expense">
                        <p>Total Income</p>
                        <div className="expense-month">
                            <div className="last-month">
                                <p className='month-header'>Last month</p>
                                <p>$400</p>
                            </div>
                            <div className="this-month">
                                <p className='month-header'>This month</p>
                                <p>$500</p>
                            </div>
                        </div>
                    </div>
                    <div className="button-expense">
                        <button>{">"}</button>
                    </div>
                </div>
            </div>
            <History/>
        </div>
    )
}

export default Summary;