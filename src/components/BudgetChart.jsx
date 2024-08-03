import React, { useEffect } from 'react';
import * as echarts from 'echarts';
// import './budgetreport.css';

function BudgetChart() {
    useEffect(() => {
        // Initialize the chart
        const chartDom = document.querySelector('#budgetChart');
        const myChart = echarts.init(chartDom);
        
        const option = {
            legend: {
                data: ['Allocated Budget', 'Actual Spending'],
                textStyle: {
                    fontSize: 14, // Adjust legend text size
                    color: '#000' // Adjust legend text color
                }
            },
            radar: {
                shape: 'circle',
                indicator: [
                    { name: 'Sales', max: 6500 },
                    { name: 'Adm', max: 16000 },
                    { name: 'Tech', max: 30000 },
                    { name: 'Customer Support', max: 38000 },
                    { name: 'Dev', max: 52000 },
                    { name: 'Mkt', max: 25000 }
                ],
                name: {
                    textStyle: {
                        fontSize: 14, // Adjust label font size
                        color: '#666' // Adjust label color
                    }
                }
            },
            series: [
                {
                    name: 'Budget vs spending',
                    type: 'radar',
                    data: [
                        {
                            value: [4200, 3000, 20000, 35000, 50000, 18000],
                            name: 'Allocated Budget'
                        },
                        {
                            value: [5000, 14000, 28000, 26000, 42000, 21000],
                            name: 'Actual Spending'
                        }
                    ]
                }
            ]
        };
        
        // Set the chart option
        myChart.setOption(option);

        // Cleanup function to dispose the chart on unmount
        return () => {
            if (myChart) {
                myChart.dispose();
            }
        };
    }, []);

    return (
        <div className="container">
            <div id="budgetChart" style={{ minHeight: '350px', minWidth:'250px' }} className="echart"></div>
        </div>
    );
}

export default BudgetChart;
