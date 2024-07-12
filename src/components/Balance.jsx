import '../assets/css/balance.css';
import '../assets/css/common.css';
import Stats from './Stats';

import { monthlyMoney, transactionDetails, currentDate, currentMonth } from '../assets/data/transaction';

function Balance() {
    let totalBalance = 0;
    monthlyMoney.forEach(balance => {
        if (balance.month === currentMonth) {
            totalBalance += balance.mAmount
        }
    })
    let remainingBalance = 0;
    let totalExpenditure = 0;

    transactionDetails.forEach(amount => {
        let month = amount.date.split(" ")[1];
        if (month === currentMonth) {
            totalExpenditure +=amount.amount
        }
    })
    remainingBalance = totalBalance - totalExpenditure;
    return (
        <>
            <div className='balance-div'>
                <p className='page-name'>Balance</p>
                <div className="balance-report-div">
                    <div className='balance-report'>
                        <p className='balance-money'>${totalBalance}</p>
                        <p className='today-date'>{currentDate}</p>
                        <div className='user-details'>
                            <p className='user-name'>Nishant</p>
                            <div className='style-type'>
                                <div className='type type1'></div>
                                <div className='type'></div>
                            </div>
                        </div>
                    </div>
                    <div className='limit-div'>
                        <p>Monthly Expense limit</p>
                        <div className="slider-panel">
                            ${totalExpenditure}
                            <input type="range" title={totalExpenditure} value={totalExpenditure} max={totalBalance} className="slider" />
                            ${remainingBalance}
                        </div>
                    </div>
                </div>
                <Stats/>
            </div>
        </>
    );
}

export default Balance;