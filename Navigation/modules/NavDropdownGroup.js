import React from 'react'

// A group of modules that should be clumped together in a dropdown.
const NavDropdownGroup = (props) => {

    // The className passed by the user through props to modify defualt styles.
    const givenClassName = props.className ? `${props.className} ` : ''

    // The default className given for the defualt styles.
    const defaultClassName = 'reactNavigation__dropdownGroup'

    return(
        <div className={`${givenClassName}${defaultClassName}`}>
            {props.children}
        </div>
    )
}

export default NavDropdownGroup
