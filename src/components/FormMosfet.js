import React from "react";
import './FormMosfet.css';
import { Form, FormGroup, Label, Col, Input } from "reactstrap";

const smCol = 6;
const smLabel = 3;

let transistors =
{
    mosfets: {
        mosfet1: {
            id_mosfet:1,
            description: "FQP12P20",
            package: "TO-220",
            channel: "N",            
            drainCurreunt: "12,5",
            voltageDrainSource: "200",
            resistanceDraiSource: "0,15"
        },
        mosfet2: {
            id_mosfet:2,
            description: "FQP19P20",
            package: "TO-220",
            channel: "P",            
            drainCurreunt: "11,5",
            voltageDrainSource: "200",
            resistanceDraiSource: "0,47"
        }

    },
    powerTransistors: {
        powerTransistor1: {
            id_powerTransistor:3,
            description: "TIP41C",
            package: "TO-220",
            channel: "NPN",
            voltageCollectorEmitter: 100,
            voltageEmmiterBase: 5, 
            collectorCurrent:6 
                      
        },
        powerTransistor2: {
            id_powerTransistor: 4,
            description: "TIP42C",
            package: "TO-220",
            channel: "PNP",
            voltageCollectorEmitter: 100,
            voltageEmmiterBase: 5, 
            collectorCurrent: 6  
                      
        }
    }
};

const t = transistors.mosfets.mosfet2.description;

const FormMosfet = () => {

    return (
        <div className="TR">
            <Form>
                <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>Description</Label>
                    <Col sm={smCol}>
                        <Input bsSize="lg" id="exampleEmail" name="email" placeholder={t} type="text" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>Package</Label>
                    <Col sm={smCol}>
                        <Input bsSize="lg" id="exampleEmail" name="email" placeholder="TO-220" type="text" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>Channel</Label>
                    <Col sm={smCol}>
                        <Input bsSize="lg" id="exampleEmail" name="email" placeholder="lg" type="select">
                            <option>N-CHANNEL</option>
                            <option>P-CHANNEL</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>Vds</Label>
                    <Col sm={smCol}>
                        <Input bsSize="lg" id="exampleEmail" name="email" placeholder="200" type="number" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>Id</Label>
                    <Col sm={smCol}>
                        <Input bsSize="lg" id="exampleEmail" name="email" placeholder="12,3" type="number" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>P tot</Label>
                    <Col sm={smCol}>
                        <Input bsSize="lg" id="exampleEmail" name="email" placeholder="140" type="number" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>Tj</Label>
                    <Col sm={smCol}>
                        <Input bsSize="lg" id="exampleEmail" name="email" placeholder="150" type="number" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>Rds/on</Label>
                    <Col sm={smCol}>
                        <Input bsSize="lg" id="exampleEmail" name="email" placeholder="0,15" type="number" />
                    </Col>
                </FormGroup>
            </Form>
        </div>
    );
}

export default FormMosfet;