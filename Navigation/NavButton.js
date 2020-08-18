import React, { Fragment } from 'react'

const NavButton = (props) => {
    const ButtonSvg = props.content.svg
    const buttonMap = Object.keys(props.content).map((segment, i) =>
        <Fragment key={i}> {
            segment === 'text' ? 
            <h2 className={`reactNavigation__button__text ${props.className}__text`}>{props.content.text}</h2>
            : segment === 'srcImg' ?
            <img className={`reactNavigation__button__img ${props.className}__img`} src={props.content.srcImg} alt={props.content.alt} />
            : segment === 'svg' &&
            <ButtonSvg className={`reactNavigation__button__svg ${props.className}__svg`} />
        }
        </Fragment>
    )

    return(
        <div className={`reactNavigation__button ${props.className}`}>
            { buttonMap }
        </div>  
    )
}

export default NavButton