import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../../actions';


const Error = ({clearAllData})  => {
    return (
        <div className="address-form">
        <p>Oops! A Wrong Path was taken.</p>
            <Link to='/' >
                <button onClick={clearAllData}>Go Back to Home Page</button>
            </Link >
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
  clearAllData: () => dispatch(actions.clearAllData()),
})

export default connect(null, mapDispatchToProps)(Error)
