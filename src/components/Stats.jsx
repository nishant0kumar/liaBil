import '../assets/css/stats.css'
import React from 'react'
import { Line } from 'react-chartjs-2'
import {currentMonth, transactionDetails} from '../assets/data/transaction'
import { Chart, registerables } from 'chart.js'



function Stats() {

  function dateMergedata(transactions) {
    let mergedData = {};

    transactions.forEach(transaction => {
        if (mergedData[transaction.date]) {
            mergedData[transaction.date].amount += transaction.amount;
        } else {
            mergedData[transaction.date] = { ...transaction };
        }
    });

    return Object.values(mergedData);
  }

  let mergedTransactions = dateMergedata(transactionDetails);

  Chart.register(...registerables)

  let data = [];
  let label =  [];
  mergedTransactions.splice(-7).forEach(element => {
    let month = element.date.split(" ")[1];
    let amount = 0
    let date = '';
    if (month === currentMonth) {
      amount = element.amount;
      date = element.date;
      label.push(date)
      data.push(amount)
    }
  });

  const state = {
    labels: label,
    datasets: [
      {
        label: "Recent",
        backgroundColor: [
          'White'
        ],
        fill: false,
        lineTension: 0.5,
        borderColor: 'rgba(5,5,5,0.7)',
        borderWidth: 1,
        data: data,
      },
    ],
  }
    return (
        <>
            <p className='page-name'>Statistics</p>
            <div className="statistics-div">
                <div className="stats-header">
                    <p>Expense</p>
                    <label htmlFor="weeks">
                        <select name="weeks" id="weeks">
                            <option value="week1">Week1</option>
                            <option value="week2">Week2</option>
                            <option value="week3">Week2</option>
                            <option value="week4">Week2</option>
                        </select>
                    </label>
                </div>
                <div className='stats-graph'>
                    <Line
                    data={state}
                    options={{
                        title: {
                        display: true,
                        text: 'Class Strength',
                        fontSize: 20,
                        },
                        legend: {
                        display: true,
                        position: 'right',
                        },
                    }}
                    />
                </div>
            </div>
        </>
    )
}

export default Stats;