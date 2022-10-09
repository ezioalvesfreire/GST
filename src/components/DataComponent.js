import React from "react";
import './DataComponent.css';
import { Container, Form, FormGroup, Label, Col, Input } from "reactstrap";

const DataDoComponet = () => {

    return (

        <Container className="dataTransistor">
            <Form>
                <Input className="mb-3" type="select">
                    <option>MOSFET</option>
                    <option>POWER TRANSISTOR</option>
                </Input>
            </Form>
            <div className="TR-01">
                <h2>TR-01</h2>
                <Form>
                    <FormGroup row>
                        <Label for="exampleEmail" size="lg" sm={1}>Description</Label>
                        <Col sm={2}>
                            <Input bsSize="lg" id="exampleEmail" name="email" laceholder="lg" type="email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" size="lg" sm={1}>Chanel</Label>
                        <Col sm={2}>
                            <Input bsSize="lg" id="exampleEmail" name="email" laceholder="lg" type="email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" size="lg" sm={1}>Vds</Label>
                        <Col sm={2}>
                            <Input bsSize="lg" id="exampleEmail" name="email" laceholder="lg" type="email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" size="lg" sm={1}>Id</Label>
                        <Col sm={2}>
                            <Input bsSize="lg" id="exampleEmail" name="email" laceholder="lg" type="email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" size="lg" sm={1}>P tot</Label>
                        <Col sm={2}>
                            <Input bsSize="lg" id="exampleEmail" name="email" laceholder="lg" type="email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" size="lg" sm={1}>Tj</Label>
                        <Col sm={2}>
                            <Input bsSize="lg" id="exampleEmail" name="email" laceholder="lg" type="email" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="exampleEmail" size="lg" sm={1}>Rds/on</Label>
                        <Col sm={2}>
                            <Input bsSize="lg" id="exampleEmail" name="email" laceholder="lg" type="email" />
                        </Col>
                    </FormGroup>
                </Form>
            </div>
            <div className="TR-02">
                <h2>TR-02</h2>
                <Form>
                    <FormGroup row>
                        <Label for="exampleEmail" size="lg" sm={1}>Description</Label>
                        <Col sm={2}>
                            <Input bsSize="lg" id="exampleEmail" name="email" laceholder="lg" type="email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" size="lg" sm={1}>Chanel</Label>
                        <Col sm={2}>
                            <Input bsSize="lg" id="exampleEmail" name="email" laceholder="lg" type="email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" size="lg" sm={1}>Vds</Label>
                        <Col sm={2}>
                            <Input bsSize="lg" id="exampleEmail" name="email" laceholder="lg" type="email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" size="lg" sm={1}>Id</Label>
                        <Col sm={2}>
                            <Input bsSize="lg" id="exampleEmail" name="email" laceholder="lg" type="email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" size="lg" sm={1}>P tot</Label>
                        <Col sm={2}>
                            <Input bsSize="lg" id="exampleEmail" name="email" laceholder="lg" type="email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" size="lg" sm={1}>Tj</Label>
                        <Col sm={2}>
                            <Input bsSize="lg" id="exampleEmail" name="email" laceholder="lg" type="email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" size="lg" sm={1}>Rds/on</Label>
                        <Col sm={2}>
                            <Input bsSize="lg" id="exampleEmail" name="email" laceholder="lg" type="email" />
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </Container>
    );
}

export default DataDoComponet;