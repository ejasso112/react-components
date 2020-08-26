import React from 'react'

// Returns the img to be used as a logo for a link
const NavSvg = (props) => {
    // The className passed by the user through props to modify defualt styles.
    const givenClassName = props.className ? `${props.className} ` : ''

    // The default className given for the defualt styles.
    const defaultClassName = `reactNavigation__${props.type}__img`

    return(
        <img className={`${givenClassName}${defaultClassName}`} src={props.children} alt={props.alt} />
    )
}

export default NavSvg
