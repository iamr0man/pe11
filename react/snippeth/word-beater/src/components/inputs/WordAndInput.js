import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RandomWord from './RandomWord';
import InputWord from './InputWord';

const WordAndInput = ({ level: { level } }) => {

    return (
        <div className="row">
            <div className="col-md-6 mx-auto">
                <p className="lead">Type The Given Word Within
                    <span className="text-success"> {level}</span> Seconds:
                </p>
                <RandomWord />
                <InputWord />
                {/* <Message /> */}
            </div>
        </div>
    )
}

WordAndInput.propTypes = {
    level: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    level: state.levels
})

export default connect(mapStateToProps, {})(WordAndInput)
