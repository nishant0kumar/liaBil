import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const today = dayjs();
export let currentDate = today.add(0, 'days');
export let currentMonth = today.add(0)
currentDate = currentDate.format('DD MMMM YYYY')
currentMonth = currentMonth.format('MMMM')


export let transaction = [{
    amount: 100,
    date: '22 may 2024',
    catego: 'entertainment',
    name:'shopping'
},
{
    amount: 1500,
    date: '2 may 2024',
    catego: 'entertainment',
    name:'shopping'
},
{
    amount: 400,
    date: '22 may 2024',
    catego: 'entertainment',
    name:'shopping'
},
{
    amount: 2000,
    date: '22 may 2024',
    catego: 'entertainment',
    name:'shopping'
},
{
    amount: 1500,
    date: '22 may 2024',
    catego: 'entertainment',
    name:'shopping'
},
{
    amount: 200,
    date: '22 may 2024',
    catego: 'entertainment',
    name:'shopping'
},
{
    amount: 1000,
    date: '22 may 2024',
    catego: 'entertainment',
    name:'shopping'
}]

export let monthlyMoney = [{
    mAmount: 10000,
    month: 'June'
}]

export let transactionDetails = JSON.parse(localStorage.getItem('transactionDetails'));
if (!transactionDetails) {
    transactionDetails = []
} 

export function updateTransactionDetails() {
    localStorage.setItem('transactionDetails', JSON.stringify(transactionDetails));
}

let expen = [{
    currentMonth:{
            amount: 655
        }
}]