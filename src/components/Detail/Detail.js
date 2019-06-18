import React from "react";

import "./Detail.css";


class Detail extends React.Component {

    /*
    constructor(props) {
        super(props);
        this.state = {
            startDateIndex: this.props.selectedDateIndex,
            endDateIndex: this.props.selectedDateIndex,
            selectedDetail: this.props.selectedData
        }
    }
    */

    render() {

        if (!this.props.selectedData || !this.props.selectedData.patches) {
            return <div><h3>Loading Selected Details...</h3></div>
        }

        console.log("this.props.selectedData.start_date", this.props.selectedData.start_date);
        console.log("this.props.selectedData.end_date", this.props.selectedData.end_date);
        console.log("this.props.selectedData.patches", this.props.selectedData.patches.dev);
        console.log("this.props.selectedData.patches.apply_os_patch", this.props.selectedData.patches.dev[0].apply_os_patch);
        console.log("this.props.selectedData.patches.apply_os_patch", this.props.selectedData.patches.dev[0].server.name);
        return (
            <h1>Hi!</h1>
        );
    }
}

export default Detail;