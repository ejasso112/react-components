import React from 'react'
import { Link } from 'react-router-dom'

// A link that can be used to redirect to different pages.
const NavLink = (props) => {
    // A Map that clones the children to give them the added property of type: link.
    const linkMap = React.Children.map(props.children, child => {
        return React.isValidElement(child) ?
        React.cloneElement(child, {type: 'link'})
        : child
    });

    // The className passed by the user through props to modify defualt styles.
    const givenClassName = props.className ? `${props.className} ` : ''

    // The default className given for the defualt styles.
    const defaultClassName = 'reactNavigation__link'
    
    return(
        <Link className={`${givenClassName}${defaultClassName}`} to={props.to}>
            {linkMap}
        </Link>
    )
}

export default NavLink
