import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import './Filter.css';

export default class Filter extends Component {
    render() {
        return (
        <div className="filter__div">
            <Form>
                <FormGroup check>
                    <Label className="filter__heading">Environment</Label>
                    <Label check><Input type="checkbox" />{' '}Development</Label>
                    <Label check><Input type="checkbox" />{' '}Test</Label>
                    <Label check><Input type="checkbox" />{' '}Quality Assurance</Label>
                    <Label check><Input type="checkbox" />{' '}Production</Label>
                    <br />
                    <Label className="filter__heading">Zone</Label>
                    <Label check><Input type="checkbox" />{' '}DMZ</Label>
                    <Label check><Input type="checkbox" />{' '}PII</Label>
                    <Label check><Input type="checkbox" />{' '}PCI</Label>
                    <br />
                    <Label className="filter__heading">Data Center</Label>
                    <Label check><Input type="checkbox" />{' '}Claremont</Label>
                    <Label check><Input type="checkbox" />{' '}Datapipe</Label>
                    <Label check><Input type="checkbox" />{' '}Google</Label>
                    <Label check><Input type="checkbox" />{' '}Union</Label>
                    <br />
                    <Label className="filter__heading">Operating System</Label>
                    <Label check><Input type="checkbox" />{' '}Linux</Label>
                    <Label check><Input type="checkbox" />{' '}Unix</Label>
                    <Label check><Input type="checkbox" />{' '}Windows</Label>
                    <br />
                    <Label className="filter__heading">Applications</Label>
                    <Label check><Input type="checkbox" />{' '}Database</Label>
                    <br />
                    <Label className="filter__heading">Business Owner</Label>
                    <Input type="textbox" className="filter__input" />
                    <br />
                    <Label className="filter__heading">IT Owner</Label>
                    <Input type="textbox" className="filter__input" />
                    <br />
                    <Label className="filter__heading">IP Range</Label>
                    <Input type="textbox" className="filter__input" />
                    <br />
                </FormGroup>
           </Form>
        </div>
        );
    }
}