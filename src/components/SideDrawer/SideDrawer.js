import React from 'react';

import FormContainer from '../Filter/FormContainer';
import './SideDrawer.css';


const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <FormContainer />
        </nav>);
};

export default sideDrawer;