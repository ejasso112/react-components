import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { NavigationContext } from './NavigationContext'

class NavSearchField extends Component {

    handleKeyPress = (e,path,search) => {
        if(e.charCode === 13) {
            this.props.history.push({
                pathname: path,
                search: `?search=${search}`
            })
        }
    }
    render () {
        return(
            <NavigationContext.Consumer>
            {context => (
                <input className={`reactNavigation__searchField ${this.props.className}`} type="text" size="50" placeholder="Search" onChange={context.setSearch} onKeyPress={e => this.handleKeyPress(e,this.props.to,context.state.search)}/>
            )}
            </NavigationContext.Consumer>
        )
    }
}

export default withRouter (NavSearchField)