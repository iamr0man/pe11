import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const Message = ({ msg: { message } }) => {
    return (
        <h4 class="mt-3">{message}</h4>
    )
}

Message.propTypes = {
    msg: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    msg: state.alert
})

export default connect(mapStateToProps, null)(Message)
