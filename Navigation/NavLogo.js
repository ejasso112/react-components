import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const NavLogo = (props) => {
    const LogoSvg = props.content.svg
    const logoMap = Object.keys(props.content).map((segment, i) =>
        <Fragment key={i}> {
            segment === 'text' ? 
            <h1 className={`reactNavigation__logo__text ${props.className}__text`}>{props.content.text}</h1>
            : segment === 'srcImg' ?
            <img className={`reactNavigation__logo__img ${props.className}__img`} src={props.content.srcImg} alt={props.content.alt} />
            : segment === 'svg' &&
            <LogoSvg className={`reactNavigation__logo__svg ${props.className}__svg`} />
        }
        </Fragment>
    )

    return(
        <Link className={`reactNavigation__logo ${props.className}`} to={props.to}>
            {logoMap}
        </Link>
    )
}

export default NavLogo