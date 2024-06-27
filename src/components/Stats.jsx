import '../assets/css/stats.css'
import React from 'react'
import { Line } from 'react-chartjs-2'
import {transactionDetails} from '../assets/data/transaction'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

let data = [];
let label =  [];

transactionDetails.forEach(element => {
  let amount = element.amount;
  let date = element.date;
  label.push(date)
  data.push(amount)
});

const state = {
  labels: label,
  datasets: [
    {
      label: '',
      backgroundColor: [
        'White',
        'White',
        'White',
        'White',
        'White',
        'White',
        'White',
      ],
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgba(5,5,5,1)',
      borderWidth: 1,
      data: data,
    },
  ],
}


function Stats() {
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