import React, {useState} from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Chart.css'


const Chart = ({solarData}) => {
    const [data] = useState([{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'AC Monthly',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'whitesmoke',
            borderWidth: 2,
            data: solarData.outputs.ac_monthly
         } ]
    }, {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Solar Radiation',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'whitesmoke',
                borderWidth: 2,
                data: solarData.outputs.solrad_monthly
            }]
        } ])
    // const [chartSelection, updateChartSelection] = useState('Solar Radiation')
    const [chartType, updateChartType] = useState('bar')
    const [chartData, updateChartData] = useState(data[1])

    const getSpecificChart = (e) => {
        console.log(e.target.value);
        // updateChartSelection(e.target.value)
        let newChart = data.filter(item =>{
            console.log(item.datasets[0].label)
           return item.datasets[0].label === e.target.value})
        console.log(newChart);
        updateChartData(newChart[0])
    }
    
    console.log('chartdata', chartData);
    
           return (
        <div className="configure-container">
            <div className="larger-chart-box">
            <div className="single-chart-box">
             {chartType === 'bar'  &&
             <Bar  
                data={chartData}
                width={'50%'}
                height={'50%'}
                options={{
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: chartData.datasets[0].label,
                        fontSize: 20,
                        fontColor: 'black'
                        },
                    legend: {
                        display: true,
                        position: 'bottom'
                        }
                }}
            />}
            {chartType === 'line' &&
            <Line
                data={chartData}
                width={'50%'}
                height={'50%'}
                options={{
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: chartData.datasets[0].label,
                        fontSize: 20,
                        fontColor: 'black'
                    },
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                }}
            />}
          </div>
            <div className="chart-selection-options">
            <div className="configure-form-item">
                <label>Chart Data</label>
                <select
                    className="configure-selects"
                    defaultValue={"Solar Radiation"}
                    required
                    onChange={e => getSpecificChart(e)}
                >
                    <option value="Solar Radiation">Solar Radiation</option>
                    <option value="AC Monthly">AC Monthly</option>
                    <option value="savings">Savings Value</option>
                </select>
            </div>

            <div className="configure-form-item">
                <label>Chart Type</label>
                <select
                    className="configure-selects"
                    defaultValue={'bar'}
                    required
                    onChange={e => updateChartType(e.target.value)}
                >
                    <option value='bar'>Bar</option>
                    <option value='line'>Trend (Line)</option>

                </select>
            </div>
            </div>
            </div>
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
    solarData: state.solarData
})

export default connect(mapStateToProps, null) (Chart);
