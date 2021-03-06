import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Timer from './Timer';
import RandomWord from './RandomWord';
import InputWord from './InputWord';
import Message from './Message';
import TimeAndScore from '../score/TimeAndScore';
import Instruction from '../inscruction/Instruction';

const WordAndInput = ({ level: { level } }) => {

    return (
        <div className="row">
            <div className="col-md-6 mx-auto">
                <Timer />
                <RandomWord />
                <InputWord />
                <Message />
                <TimeAndScore />
                <Instruction />
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
