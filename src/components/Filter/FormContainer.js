import React, { Component } from 'react';

import Checkbox from './Checkbox';

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataCenters: [],
            zones: [],
            environments: [],
            operatingSystemTypes: [],
            operatingSystems: []
        };
    }

    handleCheckBox = (e) => {

        console.log("handleCheckBox - e: ", e);
        console.log("handleCheckBox - e.target.id: ", e.target.id);
        console.log("handleCheckBox - typeof e.target.id: ", typeof e.target.id);

        const newSelection = e.target.value;

        let oldSelectionArray = this.state.dataCenters;
        let newSelectionArray = [];

        if(oldSelectionArray.indexOf(newSelection) > -1) {
            newSelectionArray = oldSelectionArray.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...oldSelectionArray, newSelection];
        }

        console.log("handleCheckbox - newSelectionArray: ", newSelectionArray);

        this.setState({[e.target.id]: newSelectionArray});

    }

    render() {
        console.log("render - this.state: ", this.state);
        return (
            <form className="container">
                <Checkbox title='Data Center'
                          name='dataCenters'
                          options={ ['Claremont', 'Datapipe', 'Google', 'Union'] }
                          selectedOptions={this.state.dataCenters}
                          handleChange={this.handleCheckBox}
                />
            </form>
        );
    };

}

export default FormContainer;