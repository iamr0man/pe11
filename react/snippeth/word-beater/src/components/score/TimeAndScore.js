import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { checkStatus } from '../../actions/score';

const TimeAndScore = ({ time: { level }, score: { score }, checkStatus }) => {

    useEffect(() => {
        checkStatus(level)
    }, [])

    return (
        <div className="row mt-5">
            <div className="col-md-6">
                <h3>Time Left:
              <span>{level}</span>
                </h3>
            </div>
            <div className="col-md-6">
                <h3>Score:
              <span>{score}</span>
                </h3>
            </div>
        </div>
    )
}

TimeAndScore.propTypes = {
    time: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    time: state.levels,
    score: state.score
})

export default connect(mapStateToProps, { checkStatus })(TimeAndScore)
