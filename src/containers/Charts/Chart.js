import React, { useState } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './Chart.css'


const Chart = ({ solarData, history }) => {

  const [chartType, updateChartType] = useState('bar')
  const [yAxisLabel, updateYAxisLabel] = useState('(kWh / m^2) / day')
  const [savingsValue] = useState(50)

  const [data, updateData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Solar Radiation',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'whitesmoke',
      borderWidth: 2,
      data: solarData.solrad_monthly,

    }]
  })

  const getSpecificChart = (e) => {
    let chartName = e.target.options[e.target.selectedIndex].text
    let dataNames = Object.keys(solarData)
    let chosenDataName = dataNames.find(item => e.target.value === item)
    let selectedChart = solarData[chosenDataName]
    let updatedLabel = e.target.options[e.target.selectedIndex].dataset.yAxis

    updateYAxisLabel(updatedLabel)

    updateData({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: chartName,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'whitesmoke',
        borderWidth: 2,
        data: selectedChart
      }]
    })
  }

  return (
    <div className="configure-container">
      <div className="larger-chart-box">
        <div className="single-chart-box">
          {chartType === 'bar' &&
            <Bar
              data={data}
              width={50}
              height={50}
              options={{
                maintainAspectRatio: false,
                title: {
                  display: true,
                  text: data.datasets[0].label,
                  fontSize: 20,
                  fontColor: 'black'
                },
                legend: {
                  display: true,
                  position: 'bottom'
                },
                scales: {
                  yAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: yAxisLabel
                    }
                  }]
                }
              }}
            />}
          {chartType === 'line' &&
            <Line
              data={data}
              width={50}
              height={50}
              options={{
                maintainAspectRatio: false,
                title: {
                  display: true,
                  text: data.datasets[0].label,
                  fontSize: 20,
                  fontColor: 'black'
                },
                legend: {
                  display: true,
                  position: 'bottom'
                },
                scales: {
                  yAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: yAxisLabel
                    }
                  }]
                }
              }}
            />}
          {chartType === 'pie' &&
            <Pie
              data={data}
              width={50}
              height={50}
              options={{
                maintainAspectRatio: false,
                title: {
                  display: true,
                  text: data.datasets[0].label,
                  fontSize: 20,
                  fontColor: 'black'
                },
                legend: {
                  display: true,
                  position: 'bottom'
                },
                scales: {
                  yAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: yAxisLabel
                    }
                  }]
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
              <option id='Solar' data-y-axis='(kWh / m^2) / day' value="solrad_monthly">Solar Radiation</option>
              <option id='AC' data-y-axis='kWh' value="ac_monthly">AC Monthly</option>
              {solarData.savings && <option id='Dollars $' data-y-axis='' value="savings">Savings Value</option>}
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
              <option value='pie'>Pie</option>

            </select>
          </div>
        </div>
      </div>
      <div className="savings-display-bar">
        {history ?
          <p>Based on your annual energy usage, this solar system would offset {savingsValue}% per year! </p> :
          < p > For a true savings estimate, please enter your <Link to="/historical"> home energy data</Link> </p>
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  solarData: state.solarData.outputs,
  history: state.solarData.historicalData
})

export default connect(mapStateToProps, null)(Chart);
