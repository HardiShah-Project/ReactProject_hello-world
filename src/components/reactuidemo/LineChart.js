import React from 'react'
import { Line } from 'react-chartjs-2'
import '../../App.css'

function LineChart() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'sales for 2021  (M)',
            data: [3, 2, 1, 4, 5],
            borderColor: ['rgba(255, 206, 86, 0.2)'],
            backgroundColor: ['rgba(255, 206, 86, 0.2)'],
            pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
            pointBorderColor: 'rgba(255, 206, 86, 0.2)'
        },
        {
            label: 'sales for 2020  (M)',
            data: [1, 4, 2, 5, 3],
            borderColor: ['rgba(54, 162, 235, 0.2)'],
            backgroundColor: ['rgba(54, 162, 235, 0.2)'],
            pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
            pointBorderColor: 'rgba(54, 162, 235, 0.2)'
        }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Line Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 6,
                        stepSize: 1
                    }
                }
            ]
        }
    }
    return (
        <div className='App' style={{ width: "720px" }}>
            <Line data={data} options={options}/>
        </div>
    )
}
export default LineChart