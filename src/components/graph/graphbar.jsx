import React, { Component } from "react";
import {Bar, HorizontalBar} from 'react-chartjs-2';

class BarChart extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        chartData:{
          labels: ['JavaScript', 'Python', 'CSS', 'SQL','C#','React'],
          datasets:[
            {
              label:'Conocimientos',
              data:[
                75,
                90,
                80,
                90,
                75,
                90
              ],
              backgroundColor:[
                'rgba(240,219,79,1)',
                'rgba(54,162,235,1)',
                'rgba(199,41,165,1)',
                'rgba(16,132,18,1)',
                'rgba(111,22,211,1)',
                'rgba(167,45,24,1)'
              ]
            }
          ]
        }
      }
    }
    
    render() {
      return (
        <div className="chart backchart">
          <HorizontalBar 
            data={this.state.chartData}
            options={{
              title:{
                display:true,
                text:''
              },
              legend:{
                display:false,
                position:'right'
              },
              scales:{
                xAxes:[{
                  ticks:{
                    beginAtZero: true,
                    min:0,
                    max:100,
                    fontColor: 'white'
                  }
                }],
                yAxes:[{
                  ticks:{
                    fontColor: 'white'
                  }
                }]
              }
            }}
          />
        </div>
      )
      }
}

export default BarChart;