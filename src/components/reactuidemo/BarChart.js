import React from 'react'
import { Bar } from 'react-chartjs-2'
import '../../App.css'

function BarChart() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'sales for 2021  (M)',
            data: [3, 2, 1, 4, 5],
            borderColor: ['rgba(255, 206, 86, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(255, 206, 86, 0.2)'
                , 'rgba(255, 206, 86, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)', 'rgba(255, 206, 86, 0.2)']
        },
        {
            label: 'sales for 2020  (M)',
            data: [1, 4, 2, 5, 3],
            borderColor: ['rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)'
                , 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)'
                , 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)']
        }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Bar Chart'
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
            <Bar data={data} options={options} />
        </div>
    )
}
export default BarChart