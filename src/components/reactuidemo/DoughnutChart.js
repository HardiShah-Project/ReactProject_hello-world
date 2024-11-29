import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import '../../App.css'

function DoughnutChart() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'sales 2021 (M)',
            data: [3, 2, 1, 4, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(153, 102, 255, 1)'
              ]
        }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Doughnut Chart'
        }
    }
    return (
        <div className='App' style={{ width: "720px" }}>
            <Doughnut data={data} options={options} />
        </div>
    )
}
export default DoughnutChart