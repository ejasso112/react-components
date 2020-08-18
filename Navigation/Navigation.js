import React, { Component, Fragment } from 'react'
import NavigationProvider from './NavigationContext'

import NavGroup from "./NavGroup"
import NavLogo from "./NavLogo"
import NavLink from "./NavLink"
import NavLinkButton from './NavLinkButton'
import NavButton from './NavButton'
import NavSearchField from './NavSearchField'

import './Navigation.scss'

class Navigation extends Component {
    render() {
        const navmap = this.props.children.map((entry, i) =>
            <Fragment key={i}>
                {React.cloneElement(entry)}
            </Fragment>
        )

        return(
            <nav className={`reactNavigation ${this.props.className}`}>
                <NavigationProvider>
                    {navmap}
                </NavigationProvider>
            </nav>
        )
    }
}

export default Navigation
export { NavGroup, NavLink, NavLogo, NavSearchField, NavLinkButton, NavButton }