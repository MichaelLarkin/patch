import React, { Component } from 'react';

import FormContainer from '../Filter/FormContainer';
import './SideDrawer.css';

class sideDrawer extends Component {

    constructor(props) {
        super(props);
    }

    handleFilterChange = (filterState) => {
        this.props.onFilterChange(filterState);
    };

    render() {
        let drawerClasses = 'side-drawer';
        if (this.props.show) {
            drawerClasses = 'side-drawer open';
        }
        return (
            <nav className={drawerClasses}>
                <FormContainer onFilterChange={this.handleFilterChange} />
            </nav>);
    };
}

export default sideDrawer;