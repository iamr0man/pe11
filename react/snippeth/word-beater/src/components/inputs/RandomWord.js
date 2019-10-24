import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import PropTypes from 'prop-types'

import { changeCurrent, changeInput } from '../../actions/word';
import { setAlert } from '../../actions/alert';
import { changeScore } from '../../actions/score';

const RandomWord = ({ word: { inputWord, currentWord },
    changeCurrent,
    changeInput, setAlert, changeScore }) => {

    const words = [
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
    ]

    const idx = Math.floor(Math.random() * words.length);

    useEffect(() => {
        changeCurrent(words[idx])
    }, [])

    const isMatch = () => {
        changeCurrent(words[idx]);
        changeInput('')
        setAlert('Correct!!!')
        changeScore(1)
    }

    return (
        <h2 className="display-2 mb-5">
            {inputWord !== currentWord ? currentWord : isMatch()}
        </h2>
    )
}

RandomWord.propTypes = {
    word: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    word: state.words
})

export default connect(mapStateToProps, { changeInput, changeCurrent, setAlert, changeScore })(RandomWord)
