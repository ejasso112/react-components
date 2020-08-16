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
        <input className={props.className} type="text" placeholder="Search" onChange={props.onSearchChange}/>
    )
}

const NavButton = (props) => {
    const hasLink = props.to && true
    return(
        hasLink ?
            props.type === "search" ?
            <Link to={{ pathname: props.to, search: `?name=${props.searchValue}` }} className={props.className}>
                <svg className={`${props.className}__svg`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"/></svg>
            </Link>

            : props.type === "advSearch" ?
            <Link to={props.to} className={props.className}>
                <svg className={`${props.className}__svg`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z" /></svg>
            </Link>

            : props.type === "profile" ?
            <Link to={props.to} className={props.className}>
                <svg className={`${props.className}__svg`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
            </Link>

            : props.children &&
            <Link to={props.to} className={props.className}>
                <h2 className={`${props.className}__text`}>{props.children}</h2>
            </Link>
        :

        <div className={props.className}>
            {
            props.type === "search" ?
            <svg className={`${props.className}__svg`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"/></svg>
            : props.type === "advSearch" ?
            <svg className={`${props.className}__svg`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z" /></svg>
            : props.type === "profile" ?
            <svg className={`${props.className}__svg`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
            : props.children &&
            <h2 className={`${props.className}__text`}>{props.children}</h2>
            }
        </div>
    )
}

export default Navigation
export { NavGroup, NavLink, NavLogo, NavSearchField, NavButton }