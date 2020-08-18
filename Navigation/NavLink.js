import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const NavLink = (props) => {
    const LinkSvg = props.content.svg
    const linkMap = Object.keys(props.content).map((segment, i) =>
        <Fragment key={i}> {
            segment === 'text' ? 
            <h2 className={`reactNavigation__link__text ${props.className}__text`}>{props.content.text}</h2>
            : segment === 'srcImg' ?
            <img className={`reactNavigation__link__img ${props.className}__img`} src={props.content.srcImg} alt={props.content.alt} />
            : segment === 'svg' &&
            <LinkSvg className={`reactNavigation__link__svg ${props.className}__svg`} />
        }
        </Fragment>
    )

    return(
        <Link className={`reactNavigation__logo ${props.className}`} to={props.to}>
            {linkMap}
        </Link>
    )
}

export default NavLink