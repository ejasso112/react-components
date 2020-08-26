import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavigationContext } from './NavigationContext';

/**
 * Component that alerts if you click outside of it
 */
class OutsideAlerter extends Component {
    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }
    
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }
    
    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);

        if (!domNode || !domNode.contains(event.target)) {
            this.context.handleDropdownReset(this.props.name)
        }
        else {
            
        }
    }

    render() {
        return <React.Fragment ref={this.wrapperRef}>{this.props.children}</React.Fragment>;
    }
}

OutsideAlerter.contextType = NavigationContext
export default OutsideAlerter