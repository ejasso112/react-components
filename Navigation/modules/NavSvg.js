import React from 'react'

// Returns the svg to be used as a logo for a link
const NavSvg = (props) => {
    const LogoSvg = props.children

    // The className passed by the user through props to modify defualt styles.
    const givenClassName = props.className ? `${props.className} ` : ''
    
    // The default className given for the defualt styles.
    const defaultClassName = `reactNavigation__${props.type}__svg`

    return(
        <LogoSvg className={`${givenClassName}${defaultClassName}`} />
    )
}

export default NavSvg
