import React, { Component } from 'react'

const NavigationContext = React.createContext()

class NavigationProvider extends Component {
    state ={
        isLoggedin: false,
        isDarkMode: false,
        
        search: ''
    }

    setSearch = e => {
        this.setState({search: e.target.value})
    }

    render() {
        return (
            <NavigationContext.Provider value={{
                state: this.state,
                setSearch: this.setSearch
            }}>
                {this.props.children}
            </NavigationContext.Provider>
        )
    }
}

export default NavigationProvider
export { NavigationContext }