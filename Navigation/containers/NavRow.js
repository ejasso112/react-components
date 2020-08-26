import React from 'react'
import { NavigationContext } from '../NavigationContext'

// NavRow is a container that that groups together NavCols that are to be place in the same row.
const NavRow = (props) => {
    return(
        <NavigationContext.Consumer>
        { context => {
            // Bool the checks to see if the module is has the prop.type extension.
            const isExtension = props.type === 'extension' && true

            // Bool that receives the state of the extension by its prop.name.
            const isToggled = isExtension && context.getExtensionToggle(props.name)
            
            // The className passed by the user through props to modify defualt styles.
            const givenClassName = props.className ? `${props.className} ` : ''
            const givenClassNameContent = props.className ? `${props.className}__content ` : ''

            // The default className given for the defualt styles.
            const defaultClassName = 'reactNavigation__navRow'
            const defaultClassNameContent = 'reactNavigation__navRow__content'
            const defaultClassNameExt = isExtension ? ' reactNavigation__extension ' : ''

            // Extension className style modifier based on toggle.
            const defaultClassModifier = isExtension ? ` reactNavigation__extension--${isToggled}` : ''

            return (
                <div className={`${givenClassName}${defaultClassName}${defaultClassNameExt}${defaultClassModifier}`}>
                    <div className={`${givenClassNameContent}${defaultClassNameContent}`}>
                        {props.children}
                    </div>
                </div>
            )
        }}
        </NavigationContext.Consumer>
    )
}

export default NavRow
