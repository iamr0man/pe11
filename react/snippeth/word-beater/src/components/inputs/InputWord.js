import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeInput } from '../../actions/word';

const InputWord = ({ changeInput, word: { inputWord } }) => {

    return (
        <input type="text" className="form-control form-control-lg" placeholder="Start typing..." autoFocus
            onChange={e => changeInput(e.target.value)}
            value={inputWord}
        />
    )
}

InputWord.propTypes = {
    changeInput: PropTypes.func.isRequired,
    word: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    word: state.words
})

export default connect(mapStateToProps, { changeInput })(InputWord)
