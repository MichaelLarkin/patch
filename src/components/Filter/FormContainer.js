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

        const newSelection = e.target.value;

        let oldSelectionArray = [];

        switch(e.target.id) {
            case 'dataCenters':
                oldSelectionArray = this.state.dataCenters;
                break;
            case 'zones':
                oldSelectionArray = this.state.zones;
                break;
            case 'environments':
                oldSelectionArray = this.state.environments;
                break;
            case 'operatingSystemTypes':
                oldSelectionArray = this.state.operatingSystemTypes;
                break;
            case 'operatingSystems':
                oldSelectionArray = this.state.operatingSystems;
                break;
            default:
                return null;
        }

        let newSelectionArray = [];

        if(oldSelectionArray.indexOf(newSelection) > -1) {
            newSelectionArray = oldSelectionArray.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...oldSelectionArray, newSelection];
        }

        this.setState({[e.target.id]: newSelectionArray},
            () => {this.props.onFilterChange(this.state)});
    };

    render() {
        return (
            <form className="container">
                <Checkbox title='Data Center'
                          name='dataCenters'
                          options={ ['Claremont', 'Datapipe', 'Google', 'Union'] }
                          selectedOptions={this.state.dataCenters}
                          handleChange={this.handleCheckBox}
                />
                <Checkbox title='Zones'
                          name='zones'
                          options={ ['Corporate', 'DMZ', 'PCI', 'PII'] }
                          selectedOptions={this.state.zones}
                          handleChange={this.handleCheckBox}
                />
                <Checkbox title='Environments'
                          name='environments'
                          options={ ['Production', 'UAT', 'QA', 'Test', 'Development'] }
                          selectedOptions={this.state.environments}
                          handleChange={this.handleCheckBox}
                />
                <Checkbox title='Operating System Types'
                                        name='operatingSystemTypes'
                                        options={ ['Physical', 'Virtual'] }
                                        selectedOptions={this.state.operatingSystemTypes}
                                        handleChange={this.handleCheckBox}
            />
                <Checkbox title='Operating Systems'
                          name='operatingSystems'
                          options={ ['Linux', 'Unix', 'Windows'] }
                          selectedOptions={this.state.operatingSystems}
                          handleChange={this.handleCheckBox}
                />
            </form>
        );
    };
}

export default FormContainer;