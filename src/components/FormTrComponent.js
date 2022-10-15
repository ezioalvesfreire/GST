import React from "react";
import './DataComponent.css';
import { Container, Form, FormGroup, Label, Col, Input } from "reactstrap";

const smCol = 6;
const smLabel = 3;

let transistor =
{
    mosfet:{
        mosfet1:{
            description: "FQP12P20",
            package: "TO-220",
            channel: "N",
            vds: "200",
            Id: "12,5",
            ptot: "140",
            tj: "150",
            rds:"0,15"
          },
          mosfet2:{
            description: "FQP19P20",
            package: "TO-220",
            channel: "P",
            vds: "200",
            Id: "11,5",
            ptot: "120",
            tj: "150",
            rds:"0,47"
          }

    },
    powerTr:{
        powerTr1:{
            description: "TIP41C",
            package: "TO-220",
            channel: "NPN",      
            Id: "12,5",
            ptot: "140",
            tj: "150"          
          },
          powerTr2:{
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

const FormTrComponent = () => {

    return (
        <div className="TR">
            <Form>
                <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>Description</Label>
                    <Col sm={smCol}>
                        <Input bsSize="lg" id="exampleEmail" name="email" placeholder={t} type="email" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>Package</Label>
                    <Col sm={smCol}>
                        <Input bsSize="lg" id="exampleEmail" name="email" placeholder="TO-220" type="email" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>Channel</Label>
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
    );
}

export default FormTrComponent;