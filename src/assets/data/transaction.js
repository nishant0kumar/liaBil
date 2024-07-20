import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const today = dayjs();
export let currentDate = today.add(0, 'days');
export let currentMonth = today.add(0);
export let previousMonth = today.add(-1, 'months')
currentDate = currentDate.format('DD MMMM YYYY');
currentMonth = currentMonth.format('MMMM');
previousMonth = previousMonth.format('MMMM');

export let monthlyMoney = JSON.parse(localStorage.getItem('monthlyMoney')); 
if (!monthlyMoney){
    monthlyMoney = [{
        mAmount: 0,
        month: 'July',
        date: ''
    }];
}

export let transactionDetails = JSON.parse(localStorage.getItem('transactionDetails'));
if (!transactionDetails) {
    transactionDetails = [
        /* {
            amount: 500,
            description: "description",
            catego: "entertainment",
            date: "20 July 2024",
        } */
    ];
}

console.log(transactionDetails);

function sortTransactiondetails(transactionDetails) {
    const parseDateString = (dateString) => {
        const [day, month, year] = dateString.split(" ");
        return new Date(`${month} ${day}, ${year}`);
    };

    transactionDetails.sort((a, b) => parseDateString(a.date) - parseDateString(b.date));
}


export function updateTransactionDetails() {
    localStorage.setItem('transactionDetails', JSON.stringify(transactionDetails));
    localStorage.setItem('monthlyMoney', JSON.stringify(monthlyMoney));
    sortTransactiondetails(transactionDetails);
}