import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const today = dayjs();
export let currentDate = today.add(0, 'days');
export let currentMonth = today.add(0);
export let previousMonth = today.add(-1, 'months')
currentDate = currentDate.format('DD MMMM YYYY');
currentMonth = currentMonth.format('MMMM');
previousMonth = previousMonth.format('MMMM');

console.log(previousMonth);


export let monthlyMoney = JSON.parse(localStorage.getItem('monthlyMoney')); 
if (!monthlyMoney){
    monthlyMoney = [{
    mAmount: 0,
    month: 'July',
    date: ''
}]
}

export let transactionDetails = JSON.parse(localStorage.getItem('transactionDetails'));
if (!transactionDetails) {
    transactionDetails = []
} 

/* console.log(transactionDetails); */

export function updateTransactionDetails() {
    localStorage.setItem('transactionDetails', JSON.stringify(transactionDetails));
    localStorage.setItem('monthlyMoney', JSON.stringify(monthlyMoney));
}

let expen = [{
    currentMonth:{
            amount: 655
        }
}]

/* console.log(expen); */