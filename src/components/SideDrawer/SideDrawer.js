import React from 'react';

import Filter from '../Filter/Filter';
import './SideDrawer.css';


const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <Filter />
        </nav>);
};

export default sideDrawer;