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
        </nav>
    </header>
);

export default toolbar;
