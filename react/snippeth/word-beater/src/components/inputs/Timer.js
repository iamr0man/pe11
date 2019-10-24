import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const Timer = ({ level: { level } }) => {
    return (
        <p className="lead">Type The Given Word Within
            <span className="text-success"> {level}</span> Seconds:
        </p>
    )
}

Timer.propTypes = {

}

Timer.propTypes = {
    level: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    level: state.levels
})

export default connect(mapStateToProps, null)(Timer)