import React, { Component } from 'react'
import NavigationProvider from './NavigationContext'

import NavRow from './containers/NavRow'
import NavCol from "./containers/NavCol"

import NavText from './modules/NavText'
import NavSvg from './modules/NavSvg'
import NavImg from './modules/NavImg'

import NavLogo from './modules/NavLogo'
import NavLink from './modules/NavLink'
import NavLinkButton from './modules/NavLinkButton'
import NavButton from './modules/NavButton'

import NavDropdown from './modules/NavDropdown'
import NavDropdownGroup from './modules/NavDropdownGroup'

import NavSearchField from './modules/NavSearchField'
import './Navigation.scss'

class Navigation extends Component {
    render() {
        const givenClassName = this.props.className ? `${this.props.className} `: ''
        const defaulfClassName = 'reactNavigation'

        return(
            <nav className={`${givenClassName}${defaulfClassName}`}>
                <NavigationProvider>
                    {this.props.children}
                </NavigationProvider>
            </nav>
        )
    }
}

export default Navigation
export { 
    NavRow, NavCol,
    NavText, NavSvg, NavImg,
    NavLogo, NavLink, NavLinkButton, NavButton,
    NavDropdown, NavDropdownGroup,
    NavSearchField
}
