import React from "react";
import './FormMosfet.css';
import { Form, FormGroup, Label, Col, Input } from "reactstrap";

const smCol = 6;
const smLabel = 3;

let transistors =
{
    mosfets: {
        mosfet1: {
            id_mosfet: 1,
            description: "FQP12P20",
            pack: "TO-220",
            ch: "N",
            drainCurreunt: "12,5",
            voltageDrainSource: "200",
            resistanceDraiSource: "0,15"
        },
        mosfet2: {
            id_mosfet: 2,
            description: "FQP19P20",
            pack: "TO-220",
            ch: "P",
            drainCurreunt: "11,5",
            voltageDrainSource: "200",
            resistanceDraiSource: "0,47"
        }

    },
    powerTransistors: {
        powerTransistor1: {
            id_powerTransistor: 3,
            description: "TIP41C",
            pack: "TO-220",
            ch: "NPN",
            voltageCollectorEmitter: 100,
            voltageEmmiterBase: 5,
            collectorCurrent: 6

        },
        powerTransistor2: {
            id_powerTransistor: 4,
            description: "TIP42C",
            pack: "TO-220",
            ch: "PNP",
            voltageCollectorEmitter: 100,
            voltageEmmiterBase: 5,
            collectorCurrent: 6

        }
    }
};

const t = transistors.mosfets.mosfet2.description;

const FormMosfet = ({ idForm }) => {

    return (
        <div id={idForm} className="TR">
            <FormGroup row>
                <Label for="exampleEmail" size="lg" sm={smLabel}>Description</Label>
                <Col sm={smCol}>
                    <Input bsSize="lg" id="descriptionMosfet" name={"descriptionMosfet_" + idForm} placeholder={t} type="text" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleEmail" size="lg" sm={smLabel}>Package</Label>
                <Col sm={smCol}>
                    <Input bsSize="lg" id="packageMosfet" name={"packageMosfet_" + idForm} placeholder="TO-220" type="text" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleEmail" size="lg" sm={smLabel}>Channel</Label>
                <Col sm={smCol}>
                    <Input bsSize="lg" id="channelMosfet" name={"channelMosfet_" + idForm} type="select">
                        <option>N-CHANNEL</option>
                        <option>P-CHANNEL</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleEmail" size="lg" sm={smLabel}>Id</Label>
                <Col sm={smCol}>
                    <Input bsSize="lg" id="drainCurreunt" name={"drainCurrent_" + idForm} placeholder="200" type="number" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleEmail" size="lg" sm={smLabel}>Vds</Label>
                <Col sm={smCol}>
                    <Input bsSize="lg" id="voltageDrainSource" name={"voltageDrainSource_" + idForm} placeholder="12,3" type="number" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleEmail" size="lg" sm={smLabel}>Rds/on</Label>
                <Col sm={smCol}>
                    <Input bsSize="lg" id="resistanceDraiSource" name={"resistanceDraiSource_"  + idForm} placeholder="140" type="number" />
                </Col>
            </FormGroup>
        </div>
    );
}

export default FormMosfet;