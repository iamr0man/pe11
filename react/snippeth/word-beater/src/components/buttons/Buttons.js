import React from 'react'
import { connect } from 'react-redux';

import { EASY, MEDIUM, HARD } from '../../constans/levels'

import { changeLevel } from "../../actions/levels";

const Buttons = ({ changeLevel }) => {

    const setLevel = e => {
        changeLevel(e.target.value)
    }

    return (
        <div className="d-flex justify-content-center mt-5 mb-5">
            <button
                className="btn btn-primary mr-3"
                value={EASY}
                onClick={e => setLevel(e)}>EASY</button>
            <button
                className="btn btn-primary"
                value={MEDIUM}
                onClick={e => setLevel(e)}>MEDIUM</button>
            <button
                className="btn btn-primary ml-3"
                value={HARD}
                onClick={e => setLevel(e)}>HARD</button>
        </div>
    )
}

export default connect(null, { changeLevel })(Buttons)
