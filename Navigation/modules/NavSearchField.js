import React from 'react'
import { withRouter } from 'react-router-dom'
import { NavigationContext } from '../NavigationContext'

// Search field that cen be user to redirect passing the search value through the path.
const NavSearchField = (props) => {
    // Event handler for when the return key is pressed. 
    const handleKeyPress = (e, path, search) => {
        e.charCode === 13 && 
        props.history.push({ pathname: path, search: `?search=${search}` })
    }

    return(
        <NavigationContext.Consumer>
        { context => {
            // The className passed by the user through props to modify defualt styles.
            const givenClassName = props.className ? `${props.className} ` : ''

            // The default className given for the defualt styles.
            const defaultClassName = 'reactNavigation__searchfield'

            return(
                <input className={`${givenClassName}${defaultClassName}`} type="text" size="50" placeholder="Search" onChange={context.setSearch} onKeyPress={e => handleKeyPress(e, props.to, context.state.search)}/>
            )
        }}
        </NavigationContext.Consumer>
    )
}

export default withRouter (NavSearchField)
