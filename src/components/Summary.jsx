import '../assets/css/summary.css';
import History from './TransactionHistory';

import {transactionDetails, monthlyMoney, currentMonth, previousMonth} from '../assets/data/transaction.js'
function Summary() {
    let currentExpense = 0;
    let previousExpense = 0;

    transactionDetails.forEach(element => {

        let month = element.date.split(" ")[1];
        if (month === currentMonth) {
            currentExpense += element.amount;
        }
        if (month === previousMonth) {
            previousExpense +=element.amount;
        }

    });

    let totalBalance = 0;
    let previousBalance = 0;

    monthlyMoney.forEach(balance => {
        if (balance.month === currentMonth) {
            totalBalance += balance.mAmount
        }
    })

    monthlyMoney.forEach(balance => {
        if (balance.month === previousMonth) {
            previousBalance = balance.mAmount
        }
    })
    let perRem = 0;
    let perInc = 0;
    if (totalBalance != 0) {
        perInc = (((totalBalance-currentExpense)/totalBalance)*100).toFixed(1);
        perRem = ((currentExpense/totalBalance)*100).toFixed(1);
    }
    return(
        <div className='summary'>
            <p className='page-name' style={{marginBottom:20}}>Summary</p>
            <div className="summary-details">

                {/*================= Income Debit =======================*/}

                <div className="expense-summary summary-ei">
                    <div className='round-visualise'>
                        <h2>{perRem}%</h2>
                    </div>
                    <div className="month-expense">
                        <p>Total expense</p>
                        <div className="expense-month">
                            <div className="last-month">
                                <p className='month-header'>Last month</p>
                                <p>-${previousExpense}</p>
                            </div>
                            <div className="this-month">
                                <p className='month-header'>This month</p>
                                <p>-${currentExpense}</p>
                            </div>
                        </div>
                    </div>
                    <div className="button-expense">
                        <button>{">"}</button>
                    </div>
                </div>

                {/*================= Income credit =======================*/}

                <div className="income-summary summary-ei">
                    <div className='round-visualise'>
                        <h2>{perInc}%</h2>
                    </div>
                    <div className="month-expense">
                        <p>Total Income</p>
                        <div className="expense-month">
                            <div className="last-month">
                                <p className='month-header'>Last month</p>
                                <p>+${previousBalance}</p>
                            </div>
                            <div className="this-month">
                                <p className='month-header'>This month</p>
                                <p>+${totalBalance}</p>
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
