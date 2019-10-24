import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const TimeAndScore = ({ time: { level }, score: { score } }) => {
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

export default connect(mapStateToProps, null)(TimeAndScore)
