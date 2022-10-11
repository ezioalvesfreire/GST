import React from "react";
import './DataComponent.css';
import { Container, Form, FormGroup, Label, Col, Input } from "reactstrap";

const smCol = 6;
const smLabel = 3;

const DataDoComponet = () => {

    return (

        <Container className="dataTransistor">
            <Form>
                <Input className="mb-3" type="select">
                    <option>MOSFET</option>
                    <option>POWER TRANSISTOR</option>
                </Input>
            </Form>
            <div className="frmComparator">
                <div className="TR-01">
                    <h2>TR-01</h2>
                    <Form>
                        <FormGroup row>
                            <Label for="exampleEmail" size="lg" sm={smLabel}>Description</Label>
                            <Col sm={smCol}>
                                <Input bsSize="lg" id="exampleEmail" name="email" placeholder="FQP19N20" type="email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" size="lg" sm={smLabel}>Package</Label>
                            <Col sm={smCol}>
                                <Input bsSize="lg" id="exampleEmail" name="email" placeholder="TO-220" type="email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" size="lg" sm={smLabel}>Chanel</Label>
                            <Col sm={smCol}>
                                <Input bsSize="lg" id="exampleEmail" name="email" placeholder="lg" type="select">
                                    <option>N</option>
                                    <option>P</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" size="lg" sm={smLabel}>Vds</Label>
                            <Col sm={smCol}>
                                <Input bsSize="lg" id="exampleEmail" name="email" placeholder="200" type="email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" size="lg" sm={smLabel}>Id</Label>
                            <Col sm={smCol}>
                                <Input bsSize="lg" id="exampleEmail" name="email" placeholder="12,3" type="email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" size="lg" sm={smLabel}>P tot</Label>
                            <Col sm={smCol}>
                                <Input bsSize="lg" id="exampleEmail" name="email" placeholder="140" type="email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" size="lg" sm={smLabel}>Tj</Label>
                            <Col sm={smCol}>
                                <Input bsSize="lg" id="exampleEmail" name="email" placeholder="150" type="email" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="exampleEmail" size="lg" sm={smLabel}>Rds/on</Label>
                            <Col sm={smCol}>
                                <Input bsSize="lg" id="exampleEmail" name="email" placeholder="0,15" type="email" />
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
                <div className="TR-02">
                    <h2>TR-02</h2>
                    <Form>
                        <FormGroup row>
                            <Label for="exampleEmail" size="lg" sm={smLabel}>Description</Label>
                            <Col sm={smCol}>
                                <Input bsSize="lg" id="exampleEmail" name="email" placeholder="FQP12P20" type="email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" size="lg" sm={smLabel}>Package</Label>
                            <Col sm={smCol}>
                                <Input bsSize="lg" id="exampleEmail" name="email" placeholder="TO-220" type="email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" size="lg" sm={smLabel}>Chanel</Label>
                            <Col sm={smCol}>
                                <Input bsSize="lg" id="exampleEmail" name="email" placeholder="lg" type="select">
                                    <option>P</option>
                                    <option>N</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" size="lg" sm={smLabel}>Vds</Label>
                            <Col sm={smCol}>
                                <Input bsSize="lg" id="exampleEmail" name="email" placeholder="200" type="email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" size="lg" sm={smLabel}>Id</Label>
                            <Col sm={smCol}>
                                <Input bsSize="lg" id="exampleEmail" name="email" placeholder="11,5" type="email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" size="lg" sm={smLabel}>P tot</Label>
                            <Col sm={smCol}>
                                <Input bsSize="lg" id="exampleEmail" name="email" placeholder="120" type="email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" size="lg" sm={smLabel}>Tj</Label>
                            <Col sm={smCol}>
                                <Input bsSize="lg" id="exampleEmail" name="email" placeholder="150" type="email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" size="lg" sm={smLabel}>Rds/on</Label>
                            <Col sm={smCol}>
                                <Input bsSize="lg" id="exampleEmail" name="email" placeholder="0,47" type="email" />
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </Container>
    );
}

export default DataDoComponet;