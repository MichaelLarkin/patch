import React from "react";

import "./Detail.css";


class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startDateIndex: -1,
            endDateIndex: -1,
            detail: [],
            selectedDetail: {}
        };
    }

    componentDidMount() {

        const status = response => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response) }
            return Promise.reject(new Error(response.statusText))
        };

        const json = response => response.json();

        fetch("http://localhost:3000/detail")
            .then ( status )
            .then ( json )
            .then( data => {
                /* console.log("Request succeeded: Summary JSON response received.", data) */
                this.setState( { startDateIndex: this.props.startDateIndex,
                    endDateIndex: this.props.endDateIndex,
                    detail: data,
                    selectedDetail: data.detail[this.props.startDateIndex]});
            })
            .catch( error => { console.log("Detail request failed.", error)});
    }

    render() {

       if ( (this.props.startDateIndex === -1) ||
            (this.props.endDateIndex === -1) ||
            (!this.state.detail) ) {
           return <div>Loading Detail...</div>
       }

       console.log("startDateIndex: ", this.state.startDateIndex);
       console.log("endDateIndex: ", this.state.endDateIndex);
       console.log("detail: ", this.state.detail);

       console.log("selectedDetail: ", this.state.selectedDetail);

       return (
            <div className="detailDiv">
                <h1>"startDateIndex: " {this.state.startDateIndex}</h1>
                <h1>"endDateIndex: " {this.state.endDateIndex}</h1>
                <h1>"selectedDetail: " {this.state.selectedDetail.start_date}</h1>
            </div>
        );
    }
}

export default Detail;