import React, {Component} from 'react';

import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Calendar from './components/Calendar/Calendar';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false,
            renderCalender: true,
            renderDetails: true,
            filterState: {},
            summary: []
        };
    }

    fetchSummaryData = () => {
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
    };

    componentDidMount() {
        this.fetchSummaryData();
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
        this.setState({filterState: filterState});
    };

    handleCalenderClick = props => {
        let visibleCalender = this.state.renderCalender;
        this.setState({renderCalender: !visibleCalender});
    };

    handleDetailsClick = props => {
        let visibleDetails = this.state.renderDetails;
        this.setState({renderDetails: !visibleDetails});
    };

    render() {
        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }

        return (
            <div className="App">
                <main>
                    <Toolbar drawerClickHandler={this.drawerToggleClickHandler}
                             handleCalenderClick={this.handleCalenderClick}
                             handleDetailsClick={this.handleDetailsClick} />
                    <SideDrawer show={this.state.sideDrawerOpen}
                                onFilterChange={this.handleFilterChange} />
                    {backdrop}
                    <Calendar renderCalender={this.state.renderCalender}
                              renderDetails={this.state.renderDetails}
                              filterState={this.state.filterState}
                              data={this.state.summary} />
                </main>
            </div>
        );
    }
}

export default App;