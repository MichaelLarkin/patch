import React from "react";

import "./Detail.css";

class Detail extends React.Component {

    displayDetail(environment) {

        let theEnvironment = "";

        switch(environment) {
            case 'production':
                theEnvironment = "Production";
                break;
            case 'uat':
                theEnvironment = "UAT";
                break;
            case 'qa':
                theEnvironment = "QA";
                break;
            case 'test':
                theEnvironment = "Test";
                break;
            case 'dev':
                theEnvironment = "Development";
                break;
            default:
                theEnvironment = "Production";
                break;
        }

        let detail = this.props.selectedData;

        if (!detail) {
            return <div></div>
        }

        return (
            detail.map((item, index) => {
                    return (
                        <div key={index}>
                            <ul>
                                {theEnvironment} OS Patch Event:
                                (ID: {item.id}) -
                                Start Date: {item.start_date} -
                                End Date: {item.end_date}
                            </ul>
                            {
                                item.patches.prod.map((subitem, subindex) => {
                                    return (
                                        <div key={subindex}>
                                            <ul>
                                                <li>Apply OS to Server: {subitem.apply_os_patch}</li>
                                                <li>Server Name: {subitem.server.name}</li>
                                                <li>Server Type: {subitem.server.type}</li>
                                                <li>Server Current OS: {subitem.server.os}</li>
                                                <li>Server Zone: {subitem.server.zone} </li>
                                                <li>Server Site: {subitem.server.site}</li>
                                                <li>Server
                                                    IPs: {subitem.server.ips.reduce((prev, curr) => [prev, ', ', curr])}</li>
                                                <li>Server IT
                                                    Owners: {subitem.server.owners.it.reduce((prev, curr) => [prev, ', ', curr])}</li>
                                                <li>Server Business
                                                    Owners: {subitem.server.owners.biz.reduce((prev, curr) => [prev, ', ', curr])}</li>
                                                {
                                                    subitem.server.server_apps.map((appitem, appindex) => {
                                                            return (
                                                                <li key={appindex}>
                                                                    Server Application: {Object.keys(appitem)} -
                                                                    Owners: {appitem[Object.keys(appitem)].reduce((prev, curr) => [prev, ', ', curr])}
                                                                </li>
                                                            )
                                                        }
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    )
                }
            )

        );
     }

    render() {
        return (
            <div>
                {this.displayDetail("production")}
                {this.displayDetail("uat")}
                {this.displayDetail("qa")}
                {this.displayDetail("test")}
                {this.displayDetail("dev")}
            </div>
        )
    }

}

export default Detail;