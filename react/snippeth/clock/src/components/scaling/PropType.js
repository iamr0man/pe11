import React from 'react'

import Button from './Button'

const PropType = props => {
    let number = 1
    return (
        <div>
            <div>
                <Button buttonLabel="Start" />
                <Button />
                <Button title={number} />
                <Button />
                <Button email="not-a-valid-email" />
                <Button email="hi@azat.co" />
            </div>
        </div>
    )
}

export default PropType
