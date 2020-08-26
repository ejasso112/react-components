import React, { Component } from 'react'

const NavigationContext = React.createContext()

class NavigationProvider extends Component {
    state ={
        isLoggedin: false,
        isDarkMode: false,
        extensionToggles: {},
        dropdownToggles: {},
        search: ''
    }
    setSearch = e => {
        this.setState({search: e.target.value})
    }

    handleExtensionToggle = name => {
        const extensionTogglesClone = {...this.state.extensionToggles}

        if(this.state.extensionToggles[name] === undefined) {
            extensionTogglesClone[name] = true
            this.setState({extensionToggles: extensionTogglesClone})
        }
        else {
            extensionTogglesClone[name] = !extensionTogglesClone[name]
            this.setState({extensionToggles: extensionTogglesClone})
        }
    }
    
    handleDropdownToggle = name => {
        const dropdownTogglesClone = {...this.state.dropdownToggles}
        const valueToInsert = dropdownTogglesClone[name] === undefined ? true : !dropdownTogglesClone[name]

        if(this.state.dropdownToggles[name] === undefined) {
            dropdownTogglesClone[name] = valueToInsert
            this.setState({dropdownToggles: dropdownTogglesClone})
        }
        else {   
            dropdownTogglesClone[name] = valueToInsert
            this.setState({dropdownToggles: dropdownTogglesClone})
        }
    }

    handleDropdownReset = name => {
        const dropdownTogglesClone = {...this.state.dropdownToggles}
        if(dropdownTogglesClone[name] === true) {
            dropdownTogglesClone[name] = false
        }

        this.setState({dropdownToggles: dropdownTogglesClone})
    }

    getExtensionToggle = name => {
        if(this.state.extensionToggles[name] === undefined) {
            return false
        }
        else {
            return this.state.extensionToggles[name]
        }
    }

    getDropdownToggle = name => {
        if(this.state.dropdownToggles[name] === undefined) {
            return false
        }
        else {
            return this.state.dropdownToggles[name]
        }
    }

    render() {
        return (
            <NavigationContext.Provider value={{
                state: this.state,
                setSearch: this.setSearch,
                handleExtensionToggle: this.handleExtensionToggle,
                handleDropdownToggle: this.handleDropdownToggle,
                getExtensionToggle: this.getExtensionToggle,
                getDropdownToggle: this.getDropdownToggle,
                handleDropdownReset: this.handleDropdownReset
            }}>
                {this.props.children}
            </NavigationContext.Provider>
        )
    }
}

export default NavigationProvider
export { NavigationContext }