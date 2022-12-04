import React from "react";
import './FormPwrTransistor.css';
import { Form, FormGroup, Label, Col, Input } from "reactstrap";

const smCol = 6;
const smLabel = 3;

let transistor =
{
    mosfet: {
        mosfet1: {
            description: "FQP12P20",
            package: "TO-220",
            channel: "N",
            vds: "200",
            Id: "12,5",
            ptot: "140",
            tj: "150",
            rds: "0,15"
        },
        mosfet2: {
            description: "FQP19P20",
            package: "TO-220",
            channel: "P",
            vds: "200",
            Id: "11,5",
            ptot: "120",
            tj: "150",
            rds: "0,47"
        }

    },
    powerTr: {
        powerTr1: {
            description: "TIP41C",
            package: "TO-220",
            channel: "NPN",
            Id: "12,5",
            ptot: "140",
            tj: "150"
        },
        powerTr2: {
            description: "TIP42C",
            package: "TO-220",
            channel: "PNP",
            Id: "12,5",
            ptot: "140",
            tj: "150"
        }
    }
};

const t = transistor.mosfet.mosfet2.description;

const FormPwrTransistor = () => {

    return (
        <div className="TR">
            <Form>
                <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>Description</Label>
                    <Col sm={smCol}>
                        <Input bsSize="lg" id="descriptionPwrTransistor" name={"descriptionPwrTransistor_"} placeholder="BD139" type="text" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>Package</Label>
                    <Col sm={smCol}>
                        <Input bsSize="lg" id="exampleEmail" name="email" placeholder="TO126" type="text" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>Channel</Label>
                    <Col sm={smCol}>
                        <Input bsSize="lg" id="exampleEmail" name="email" placeholder="lg" type="select">
                            <option>SELECIONE</option>
                            <option>NPN</option>
                            <option>PNP</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>Vcbo</Label>
                    <Col sm={smCol}>
                        <Input bsSize="lg" id="exampleEmail" name="email" placeholder="100" type="float" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>Vceo</Label>
                    <Col sm={smCol}>
                        <Input bsSize="lg" id="exampleEmail" name="email" placeholder="100" type="float" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>Vebo</Label>
                    <Col sm={smCol}>
                        <Input bsSize="lg" id="exampleEmail" name="email" placeholder="5" type="float" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>Ic</Label>
                    <Col sm={smCol}>
                        <Input bsSize="lg" id="exampleEmail" name="email" placeholder="1.5" type="float" />
                    </Col>
                </FormGroup>
            </Form>
        </div>
    );
}

export default FormPwrTransistor;