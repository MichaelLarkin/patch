import React from 'react';

import DrawToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div>
                <DrawToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"> <a href="/">Bed Bath & Beyond</a></div>
            <div className="spacer" />
            <div  className="toolbar__navigation-items">
                <ul>
                    <li onClick={props.handleCalenderClick}>Calender </li>
                    <li onClick={props.handleDetailsClick}>Details</li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
