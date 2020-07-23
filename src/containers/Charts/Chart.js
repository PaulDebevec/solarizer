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
                label: 'AC Monthly',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'whitesmoke',
                borderWidth: 2,
                data: solarData.outputs.solrad_monthly
            }]
        } ])
    const [names] = useState(['AC Monthy Output', 'SolRad Monthly'])
           return (
        <div className="configure-container">
            <div className="larger-chart-box">
            <div className="chart-box">
            <Bar
                data={data[0]}
                width={'50%'}
                height={'50%'}
                options={{
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: names[0],
                        fontSize: 20,
                        fontColor: 'black'
                        },
                    legend: {
                        display: true,
                        position: 'bottom'
                        }
                }}
            />
          </div>
          <div className="chart-box">
            <Line
                data={data[1]}
                width={'50%'}
                height={'50%'}
                options={{
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: names[1],
                        fontSize: 20,
                        fontColor: 'black'
                    },
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                }}
            />
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
