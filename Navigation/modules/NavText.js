import React from 'react'

// Returns the text to be used as a logo for a link
const NavText = (props) => {
    // The className passed by the user through props to modify defualt styles.
    const givenClassName = props.className ? `${props.className} ` : ''
    
    // The default className given for the defualt styles.
    const defaultClassName = `reactNavigation__${props.type}__text`

    return(
        props.type === 'logo' ?
        <h1 className={`${givenClassName}${defaultClassName}`}>{props.children}</h1>
        : <h2 className={`${givenClassName}${defaultClassName}`}>{props.children}</h2>
    )
}

export default NavText
