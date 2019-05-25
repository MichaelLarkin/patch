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

            <div className="toolbar__navigation-items" >
                <div>
                    <form action="#" className="search">
                        <input type="text" className="search__input" placeholder="Search Filter Name"/>
                        <button className="search__button">Go</button>
                    </form>
                </div>
                <div>
                   <ul>
                        <li><a href="/">Calendar View</a></li>
                        <li><a href="/">Detail View</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default toolbar;
