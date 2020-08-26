import React from 'react'
import { Link } from 'react-router-dom'
import { NavigationContext } from '../NavigationContext'

// A button link that can be used to redirect to different pages.
const NavLinkButton = (props) => {
    // A Map that clones the children to give them the added property of type: button.
    const linkButtonMap = React.Children.map(props.children, child => {
        return React.isValidElement(child) ?
        React.cloneElement(child, {type: 'button'})
        : child
    })

    return(
        <NavigationContext.Consumer>
        { context => {
            // Bool that checks to see if the button is of type: search.
            const isSearch = props.type === 'search' && `?search=${context.state.search}`

            // The className passed by the user through props to modify defualt styles.
            const givenClassName = props.className ? `${props.className} ` : ''

            // The default className given for the defualt styles.
            const defaultClassName = 'reactNavigation__button'
            
            return(
                <Link className={`${givenClassName}${defaultClassName}`} to={{ pathname: props.to, search: isSearch }}>
                    {linkButtonMap}
                </Link>
            )
        }}
        </NavigationContext.Consumer>
    )
}

export default NavLinkButton
