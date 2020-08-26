import React from 'react'

// NavCol is a container that groups together several modules together.
const NavCol = (props) => {
    // The className passed by the user through props to modify defualt styles.
    const givenClassName = props.className ? `${props.className} ` : ''

    // The default className given for the defualt styles.
    const defaultClassName = 'reactNavigation__navCol'

    return(
        <div className={`${givenClassName}${defaultClassName}`}>
            {props.children}
        </div>
    )
}

export default NavCol
