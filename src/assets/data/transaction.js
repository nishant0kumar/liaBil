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
    transactionDetails = [];
} 

function sortTransactiondetails(transactionDetails) {
    // Function to parse the date string into a Date object
    const parseDateString = (dateString) => {
        const [day, month, year] = dateString.split(" ");
        return new Date(`${month} ${day}, ${year}`);
    };

    // Sort the array by the date property
    transactionDetails.sort((a, b) => parseDateString(a.date) - parseDateString(b.date));
}

sortTransactiondetails(transactionDetails);

export function updateTransactionDetails() {
    localStorage.setItem('transactionDetails', JSON.stringify(transactionDetails));
    localStorage.setItem('monthlyMoney', JSON.stringify(monthlyMoney));
}