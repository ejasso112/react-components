import React from 'react'
import { NavigationContext } from '../NavigationContext'

// A dropdown container that holds modules.
const NavDropdown = (props) => {
    return(
        <NavigationContext.Consumer>
        { context => {
            // Bool that checks if the dropdown is toggled
            const isToggled = context.getDropdownToggle(props.name)

            // The className passed by the user through props to modify defualt styles.
            const givenClassName = props.className ? `${props.className} ` : ''

            // The default className given for the defualt styles.
            const defaultClassName = 'reactNavigation__dropdown'
            const defaultContentClassName = 'reactNavigation__dropdown__content'

            // Dropdown className style modifier based on toggle.
            const defaultClassModifier = ` reactNavigation__dropdown--${isToggled}`

            return(
                <div className={`${defaultClassName}`}>
                    <div className={`${givenClassName}${defaultContentClassName}${defaultClassModifier}`}>
                        {props.children}
                    </div>
                </div>
            )
        }}
        </NavigationContext.Consumer>
    )
}

export default NavDropdown
