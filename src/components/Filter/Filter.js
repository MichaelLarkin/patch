import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import './Filter.css';

class Filter extends Component {
    render() {
        return (
        <div className="filter__div">
            <Form>
                <FormGroup check>
                    <Label className="filter__heading">Data Center</Label>
                    <Label check><Input type="checkbox" />{' '}Claremont</Label>
                    <Label check><Input type="checkbox" />{' '}Datapipe</Label>
                    <Label check><Input type="checkbox" />{' '}Google</Label>
                    <Label check><Input type="checkbox" />{' '}Union</Label>
                    <br />

                    <Label className="filter__heading">Zone</Label>
                    <Label check><Input type="checkbox" />{' '}Corporate</Label>
                    <Label check><Input type="checkbox" />{' '}DMZ</Label>
                    <Label check><Input type="checkbox" />{' '}PCI</Label>
                    <Label check><Input type="checkbox" />{' '}PII</Label>
                    <br />

                    <Label className="filter__heading">Environment</Label>
                    <Label check><Input type="checkbox" />{' '}Development</Label>
                    <Label check><Input type="checkbox" />{' '}Test</Label>
                    <Label check><Input type="checkbox" />{' '}Quality Assurance (QA)</Label>
                    <Label check><Input type="checkbox" />{' '}End User Acceptance (EUA)</Label>
                    <Label check><Input type="checkbox" />{' '}Production</Label>
                    <br />

                    <Label className="filter__heading">Operating System Type</Label>
                    <Label check><Input type="checkbox" />{' '}Physical</Label>
                    <Label check><Input type="checkbox" />{' '}Virtual</Label>
                    <br />

                    <Label className="filter__heading">Operating System</Label>
                    <Label check><Input type="checkbox" />{' '}Linux</Label>
                    <Label check><Input type="checkbox" />{' '}Unix</Label>
                    <Label check><Input type="checkbox" />{' '}Windows</Label>
                    <br />
               </FormGroup>
           </Form>
        </div>
        );
    }
}

export default Filter;