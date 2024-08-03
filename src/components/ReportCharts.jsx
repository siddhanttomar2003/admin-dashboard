import React,{useState} from 'react'
import Chart from 'react-apexcharts'
function ReportCharts() {
    const[data,setData]=useState({
        series:[
          {
            name: 'Sales',
            data: [31,40,28,51,42,82,56],
          },
          {
            name: 'Revenue',
            data:[11,32,45,32,34,52,41],
          },
          {
            name: 'Customers',
            data:[15,11,32,18,9,24,11],
          },
        ],
        options :{
            chart:{
                height:350,
                type :'area',
                toolbar:{
                    show:false,
                
            },
            },
            markers:{
                size:4,
            },
            colors :['#4154f1','#2eca6a','#ff771d'],
            fill:{
                type:'gradient',
                gradient: {
                    shadeIntensity :1,
                    opacityFrom:.3,
                    opacityTo: .4,
                    stops:[0,90,100],
                },
            },
            dataLabels:{
                enabled:false,
            },
            stroke :{
                curve:'smooth',
                width:2,
            },
            xaxis :{
                categories :[
                    '00:00',
'01:30',
'02:30',
'03:30',
'04:30',
'05:30',
'06:30',
                ],
            },
            tooltip:{
                x:{
                    format:'dd/MM/yy HH:mm',
                },
            },

        },
    })
  return (
    <Chart 
    options={data.options}
    series={data.series}
    type={data.options.chart.type}
    height={data.options.height}
    ></Chart>
  )
}

export default ReportCharts