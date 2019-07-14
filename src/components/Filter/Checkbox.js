import React, { Component } from 'react';

class CheckBox extends Component {

    constructor(props) {
        super(props);
    }

     render() {
        return (
            <div>
                <label htmlFor={this.props.name} className="form-label"
                       style={{textDecoration: 'underline'}}>{this.props.title}</label>
                <div className="checkbox-group">
                    {this.props.options.map(option => {
                        return (
                            <label key={option} style={{padding: '0.25em'}}>
                                <input
                                    className="form-checkbox"
                                    id={this.props.name}
                                    name={this.props.name}
                                    onChange={this.props.handleChange}
                                    value={option}
                                    checked={this.props.selectedOptions.indexOf(option) > -1}
                                    type="checkbox"/> {option}
                            </label>
                        );
                    })}
                </div>
            </div>
        );

    }
}

export default CheckBox;