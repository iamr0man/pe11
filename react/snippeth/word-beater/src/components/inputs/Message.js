import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const Message = ({ msg: { message } }) => {

    const height = {
        height: '7vh'
    }

    return (
        <h4 className="mt-3" style={height}>{message}</h4>
    )
}

Message.propTypes = {
    msg: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    msg: state.alert
})

export default connect(mapStateToProps, null)(Message)
