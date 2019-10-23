import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import PropTypes from 'prop-types'

import { changeCurrent, changeInput } from '../../actions/word';

const RandomWord = ({ word: { inputWord, currentWord },
    changeCurrent,
    changeInput }) => {

    const [words, setWord] = useState([
        'hat',
        'river',
        'lucky',
        'statue',
        'generate',
        'stubborn',
        'cocktail',
        'runaway',
        'joke',
        'developer',
        'establishment',
        'hero',
        'javascript',
        'nutrition',
        'revolver',
        'echo',
        'siblings',
        'investigate',
        'horrendous',
        'symptom',
        'laughter',
        'magic',
        'master',
        'space',
        'definition'
    ])

    const idx = Math.floor(Math.random() * words.length);

    useEffect(() => {
        changeCurrent(words[idx])
    }, [])

    const clearInput = () => {
        changeCurrent(words[idx]);
        changeInput('')
    }

    return (
        <h2 className="display-2 mb-5">
            {inputWord !== currentWord ? currentWord : clearInput()}
        </h2>
    )
}

RandomWord.propTypes = {
    word: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    word: state.currentWord
})

export default connect(mapStateToProps, { changeInput, changeCurrent })(RandomWord)
