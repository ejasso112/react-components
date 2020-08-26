import React from 'react'
import { NavigationContext } from '../NavigationContext'
import OutsideAlerter from '../OutsideAlerter'

// A button that extends the nav, or a button that has a dropdown menu
const NavButton = (props) => {
    // A map of Cloned children of NavButton and adds a prop of type.
    const buttonMap = React.Children.map(props.children, child => {
        return React.isValidElement(child) ?
        React.cloneElement(child, {type: 'button'})
        : child
    })

    return(
        <NavigationContext.Consumer>
        { context => {
            // Bools that check if the button is an extension or doropdown.
            const isExtension = props.type === 'extension' && true
            const isDropdown = props.type === 'dropdown' && true
            
            // A handleClick event that is used depending if the buttin is an extionsion or dropdown.
            const handleClick = isExtension ? () => context.handleExtensionToggle(props.to)
            : isDropdown ? () => context.handleDropdownToggle(props.to) : null

            // The className passed by the user through props to modify defualt styles.
            const givenClassName = props.className ? `${props.className} ` : ''

            // The default className given for the defualt styles.
            const defaultClassName = 'reactNavigation__button'
            
            return(
                isDropdown ?
                <OutsideAlerter name={props.to}>
                    <div className={`${givenClassName}${defaultClassName}`} onClick={handleClick}>
                        {buttonMap}
                    </div>
                </OutsideAlerter> :

                <div className={`${givenClassName}${defaultClassName}`} onClick={handleClick}>
                    {buttonMap}
                </div>
            )
        }}
        </NavigationContext.Consumer>
    )
}

export default NavButton
