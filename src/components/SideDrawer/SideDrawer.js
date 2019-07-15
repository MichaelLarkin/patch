import React, { Component } from 'react';

import FormContainer from '../Filter/FormContainer';
import './SideDrawer.css';

class sideDrawer extends Component {

    handleFilterChange = (filterState) => {
        this.props.onFilterChange(filterState);
        console.log("SideDrawer - handleFilterChange - filterState: ", filterState);
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