import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Col, Input } from "reactstrap";

const smCol = 6;
const smLabel = 3;

let transistor =
{
    mosfet: {
        mosfet1: {
            description: "FQP12P20",
            package: "TO-220",
            channel: "N",
            voltageDrainSource  : "200",
            drainCurreunt : "12,5",
            ptot: "140",
            tj: "150",
            resistanceDraiSource : "0,15"
        },
        mosfet2: {
            description: "FQP19P20",
            package: "TO-220",
            channel: "P",
            voltageDrainSource  : "200",
            drainCurreunt : "11,5",
            ptot: "120",
            tj: "150",
            resistanceDraiSource : "0,47"
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


async function getContent() {
    try {
        const response = await fetch('http://localhost:5000/testando')
        //console.log(response)
        const data = await response.json()
        //console.log(data)
        show(data)
    } catch (error) {
        console.error(error)
    }
}

getContent()

async function postContent() {
    try {
        const response = await fetch('http://localhost:5000/testando')
        //console.log(response)
        const data = await response.json()
        //console.log(data)
        show(data)
    } catch (error) {
        console.error(error)
    }
}

postContent()


function show(users) {
    let output = ''
    for (let user of users) {
        output += `<li>${user.description}</li>`

    }
    console.log(output);
    //document.getElementById('TesteConnectAPI').innerHTML = output
}


const t = transistor.mosfet.mosfet2.description;

function TesteComponent() {
    //const [description, setDescription] = useState('')
  //  const [pack, setPack] = useState('')
   // const [ch, setCh] = useState('')
    const [voltageDrainSource, setVoltageDrainSource] = useState('')
    const [resistanceDraiSource, setResistanceDraiSource] = useState('')
    const [drainCurreunt, setDrainCurreunt] = useState('')

    function sendDataTransistor(e){
        e.preventDefault();

        alert('Teste')
    }

    return (
        <div id="TesteConnectAPI" className="TesteConnectAPI">
                    <div className="TR">
            <Form action="http://localhost:5000/testando" method="POST">   
            <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>Rds</Label>
                    <Col sm={smCol}>
                        <Input bsSize="lg" id="exampleEmail" name="email" placeholder="200" type="number" onChange={(e) => setResistanceDraiSource(e.target.value)} value={resistanceDraiSource} />
                    </Col>
                </FormGroup>               
                <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>Vds</Label>
                    <Col sm={smCol}>
                        <Input bsSize="lg" id="exampleEmail" name="email" placeholder="200" type="number" onChange={(e) => setVoltageDrainSource(e.target.value)} value={voltageDrainSource} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={smLabel}>Id</Label>
                    <Col sm={smCol}>
                        <Input bsSize="lg" id="exampleEmail" name="email" placeholder="12,3" type="number" onChange={(e) => setDrainCurreunt(e.target.value)} value={drainCurreunt} />
                    </Col>
                </FormGroup>
                <button onSubmit={sendDataTransistor}>enviar</button>
            </Form>
        </div>
        </div>
    );
    
}

export default TesteComponent;