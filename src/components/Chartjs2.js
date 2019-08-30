/**
 * react-chartjs-2
    ------------------------
    https://www.npmjs.com/package/react-chartjs-2

    npm install --save react-chartjs-2 chart.js

    Live demo: jerairrest.github.io/react-chartjs-2

    https://www.chartjs.org/docs/latest/charts/
 */


import React, { Component } from 'react';
import { Line,Bar,Doughnut,Radar,Bubble } from 'react-chartjs-2';


class Chartjs2 extends Component {
    render() {
        const lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
          };
        const data = {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }

        const buubleData =[
        {x:20,y:30,r:15},{x:40,y:10,r:10}
    ]
        
        const wrapperStyle = {
            backgroundColor:'white',
            border:'solid 1px',
            margin:'5px',
            padding:'10px',
        }
        return (
            <div className="container">
                <h2>Chartjs2</h2>
                <div style={wrapperStyle}>
                    <h4>Line Chart</h4>
                    <Line height="100" data={lineData} />
                </div>
                <div style={wrapperStyle}>
                    <h4>Bar Chart</h4>
                    <Bar height="100" data={data} />
                </div>
                <div style={wrapperStyle}>
                    <h4>Pie Chart</h4>
                    <Doughnut height="100" data={data} />
                </div>
                <div style={wrapperStyle}>
                    <h4>Radar Chart</h4>
                    <Radar height="100" data={data} />
                </div>
                <div style={wrapperStyle}>
                    <h4>Bubble Chart</h4>
                    <Bubble height="100" data={buubleData} />
                </div>
                <br/><br/>
                
            </div>
        );
    }
}

export default Chartjs2;