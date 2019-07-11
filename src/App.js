import React, {Component} from 'react';

import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Calendar from './components/Calendar/Calendar';
import FormContainer from "./components/Filter/FormContainer";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false,
            summary: []
        };
    }

    componentDidMount() {

        const status = response => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response) }
            return Promise.reject(new Error(response.statusText))
        };

        const json = response => response.json();

        fetch("http://localhost:3000/summary")
            .then ( status )
            .then ( json )
            .then( data => {
               /* console.log("Request succeeded: Summary JSON response received.", data) */
               this.setState( { summary: data });
            })
            .catch( error => { console.log("Summary request failed.", error)});
   }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    handleFilterChange = (filterState) => {
        console.log("App - handleFilterChange- filterState: ", filterState);
    };

    render() {
        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }

        return (
            <div className="App">
                <main>
                    <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                    <SideDrawer show={this.state.sideDrawerOpen} onFilterChange={this.handleFilterChange} />
                    {backdrop}
                    <Calendar data={this.state.summary} />
                    </main>

            </div>
        );
    }
}

export default App;