import React from 'react'
import './Results.css'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

const Results = ({ solarData }) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const tableData = months.map((item, index) => {
    return (
      <tr key={item}>
        <td className='text-left'>{item}</td>
        <td>{Number(solarData.solRadMonthly[index]).toFixed(2)}</td>
        <td>{Number(solarData.acMonthly[index]).toFixed(2)}</td>
        <td>{Number(solarData.savingsMonthly[index]).toFixed(2)}</td>
      </tr>
    )
  })

  return (
    <div className="results-container">
      <table className="results-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Solar Radiation<br />
              <span>(kWh / m2 / day)</span></th>
            <th>AC Energy<br />
              <span>(kWh)</span></th>
            <th>Value<br />
              <span>($)</span></th>
          </tr>
        </thead>
        <tbody>
          {solarData ? tableData : <p>Loading Solar Data....</p>}
        </tbody>
      </table>
      <div className="results-bottom">
        <Link to="/chart">
          <button>Graph It!</button>
        </Link>
        <div className="savings-display-bar">
          {solarData.percentOffset ?
            <p> Based on your annual energy usage, this solar system would offset {Number(solarData.percentOffset).toFixed(2)}% of your electicity cost per year! </p> :
            <p> For a true savings estimate, please enter your <Link to="/historical"> home energy data</Link> </p>
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  solarData: state.solarData
})


export default connect(mapStateToProps)(Results)
