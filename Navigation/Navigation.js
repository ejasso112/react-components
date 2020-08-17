import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import './Navigation.scss'

class Navigation extends Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
        this.handleSearchChange = this.handleSearchChange.bind('this')
    }

    handleSearchChange = e => {
        this.setState({search: e.target.value})
    }

    render() {
        const navmap = this.props.children.map((entry, i) =>
            <Fragment key={i}>
                {React.cloneElement(entry, { onSearchChange: this.handleSearchChange, searchValue: this.state.search })}
            </Fragment>
        )

        return(
            <nav className={`reactNavigation ${this.props.className}`}>
                {navmap}
            </nav>
        )
    }
}

const NavGroup = (props) => {
    const navmap = props.children.map((entry, i) =>
        <Fragment key={i}>
            {React.cloneElement(entry, { onSearchChange: props.onSearchChange, searchValue: props.searchValue })}
        </Fragment>
    )

    return(
        <div className={`reactNavigation__group ${props.className}`}>
            {navmap}
        </div>
    )
}

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

const NavSearchField = (props) => {
    console.log(props)
    return(
        <input className={`reactNavigation__searchField ${props.className}`} type="text" size="50" placeholder="Search" onChange={props.onSearchChange}/>
    )
}

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
        <Link className={`reactNavigation__button ${props.className}`} to={{ pathname: props.to, search: props.type === 'search' && `?name=${props.searchValue}` }}>
            {linkButtonMap}
        </Link>
    )
}
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

export default Navigation
export { NavGroup, NavLink, NavLogo, NavSearchField, NavLinkButton, NavButton }