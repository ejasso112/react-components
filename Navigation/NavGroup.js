import React, { Fragment } from 'react'

const NavGroup = (props) => {
    const navmap = props.children.map((entry, i) =>
        <Fragment key={i}>
            {React.cloneElement(entry)}
        </Fragment>
    )

    return(
        <div className={`reactNavigation__group ${props.className}`}>
            {navmap}
        </div>
    )
}

export default NavGroup