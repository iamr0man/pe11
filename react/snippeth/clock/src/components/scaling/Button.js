import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ buttonLabel, email }) => {
    return (
        <button className="btn">Name:{buttonLabel} <span>{email}</span></button>
    )
}

Button.defaultProps = { buttonLabel: 'Submit' }

Button.propTypes = {
    handler: PropTypes.func.isRequired,
    title: PropTypes.string,
    email(props, propName, componentName) {
        let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (!emailRegularExpression.test(props[propName]))
            return new Error('Email validation failed!')
    }
}

export default Button
