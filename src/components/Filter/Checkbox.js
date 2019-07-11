import React, { Component } from 'react';

class CheckBox extends Component {

    constructor(props) {
        super(props);
    }

     render() {
/*
        if ( !this.props ||
             !this.props.name ||
             !this.props.handleChange ||
             !this.props.selectedOptions )  {
                return (
                    <div>
                        "No props!"
                    </div>
                )
         }
*/
        return (
            <div>
                <label htmlFor={this.props.name} className="form-label">{this.props.title}</label>
                <div className="checkbox-group">
                    {this.props.options.map(option => {
                        return (
                            <label key={option}>
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