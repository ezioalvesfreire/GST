import React, { useState } from "react";
import axios from "axios";
import { Form, FormGroup, Label, Col, Input } from "reactstrap";



const smCol = 6;
const smLabel = 3;
const uri = 'http://localhost:5000/mosfets';

const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("TODOS OS DADOS DOS FORMS TR-1 e TR-02", data)
    //await React.get("http://localhost:5000/mosfets", data)

    const addPost = data = axios.post(uri, data)
        .then(() => {

            console.log("Sucesso", addPost)
        }).catch(() => {
            console.log("Erro", addPost)
        })
}

async function getContent() {
    try {
        const response = await fetch(uri)
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
        const response = await fetch(uri)
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


function TesteComponent() {
    const [id_mosfet, setId_mosfet] = useState('')
    //const [descript, setDescript] = useState('')
    //  const [pack, setPack] = useState('')
    // const [ch, setCh] = useState('')
    const [voltageDrainSource, setVoltageDrainSource] = useState('')
    const [resistanceDraiSource, setResistanceDraiSource] = useState('')
    const [drainCurreunt, setDrainCurreunt] = useState('')

    function sendDataTransistor(e) {
        e.preventDefault();

        alert('Teste')
    }

    return (
        <div id="TesteConnectAPI" className="TesteConnectAPI">
            <div className="TR">
                <Form onSubmit={handleSubmit}>
                    <FormGroup row>
                        <Label for="exampleEmail" size="lg" sm={smLabel}>id_mosfet</Label>
                        <Col sm={smCol}>
                            <Input bsSize="lg" id="exampleEmail" name="id_mosfet" placeholder="1" type="number" onChange={(e) => setId_mosfet(e.target.value)} value={id_mosfet} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" size="lg" sm={smLabel}>Rds</Label>
                        <Col sm={smCol}>
                            <Input bsSize="lg" id="exampleEmail" name="resistanceDraiSource" placeholder="200" type="number" onChange={(e) => setResistanceDraiSource(e.target.value)} value={resistanceDraiSource} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" size="lg" sm={smLabel}>Vds</Label>
                        <Col sm={smCol}>
                            <Input bsSize="lg" id="exampleEmail" name="voltageDrainSource" placeholder="200" type="number" onChange={(e) => setVoltageDrainSource(e.target.value)} value={voltageDrainSource} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" size="lg" sm={smLabel}>Id</Label>
                        <Col sm={smCol}>
                            <Input bsSize="lg" id="exampleEmail" name="drainCurreunt" placeholder="12,3" type="number" onChange={(e) => setDrainCurreunt(e.target.value)} value={drainCurreunt} />
                        </Col>
                    </FormGroup>
                    <button onSubmit={sendDataTransistor}>enviar</button>
                </Form>
            </div>
        </div>
    );

}

export default TesteComponent;