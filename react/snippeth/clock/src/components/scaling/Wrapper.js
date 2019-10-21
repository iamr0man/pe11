import React from 'react'

import LoadWebsite from './LoadWebsite'

import { Button } from './Elements'
import { Link } from './Elements'
import { Logo } from './Elements'

const EnhancedButton = LoadWebsite(Button)
const EnhancedLink = LoadWebsite(Link)
const EnhancedLogo = LoadWebsite(Logo)

export default class Wrapper extends React.Component {
    render() {
        return (
            <div>
                <EnhancedButton />
                <br />
                <br />
                <EnhancedLink />
                <br />
                <br />
                <EnhancedLogo />
                <br />
                <br />
                <iframe id="frame" src="" width="600" height="500" />
            </div>
        )
    }
}