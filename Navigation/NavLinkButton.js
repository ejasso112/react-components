import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { NavigationContext } from './NavigationContext'

const NavLinkButton = (props) => {
    const LinkButtonSvg = props.content.svg
    const linkButtonMap = Object.keys(props.content).map((segment, i) =>
        <Fragment key={i}> {
            segment === 'text' ? 
            <h2 className={`reactNavigation__button__text ${props.className}__text`}>{props.content.text}</h2>
            : segment === 'srcImg' ?
            <img className={`reactNavigation__button__img ${props.className}__img`} src={props.content.srcImg} alt={props.content.alt} />
            : segment === 'svg' &&
            <LinkButtonSvg className={`reactNavigation__button__svg ${props.className}__svg`} />
        }
        </Fragment>
    )

    return(
        
        <NavigationContext.Consumer>
        {context => (
            <Link className={`reactNavigation__button ${props.className}`} to={{ pathname: props.to, search: props.type === 'search' && `?search=${context.state.search}` }}>
                {linkButtonMap}
            </Link>
        )}
        </NavigationContext.Consumer>
    )
}

export default NavLinkButton