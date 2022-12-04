import React from "react";
import './DataFets.css';
import axios from "axios";
import FormMosfet from "../components/FormMosfet";
import { Button, Container, Form, Input } from "reactstrap";
import NavComponent from "../components/NavComponent";
import { Check, RefreshCcw } from "react-feather";



const DataFets = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.clear()

        let formMosfet = e.target;
        const mosfetForm2 = document.getElementById('mosfetForm2', formMosfet)

        document.getElementById('mosfetForm2').classList.remove('erro')
        document.getElementById('mosfetForm2').classList.remove('sucess')
        document.getElementById('channelMosfet_2', formMosfet).classList.remove('erro')
        document.getElementById('resistanceDraiSource_2', formMosfet).classList.remove('erro')
        document.getElementById('drainCurrent_2', formMosfet).classList.remove('erro')
        document.getElementById('voltageDrainSource_2', formMosfet).classList.remove('erro')

        const formDataMosfet1 = new FormData(document.getElementById('Form1', formMosfet))
        const dataMosfet1 = Object.fromEntries(formDataMosfet1)

        const formDataMosfet2 = new FormData(document.getElementById('Form2', formMosfet))
        const dataMosfet2 = Object.fromEntries(formDataMosfet2)

        const agrupFormsMosfets = [
            dataMosfet1, dataMosfet2
        ]

        //console.log("TODOS OS DADOS DO FORM 1 TESTE", dataMosfet1)

        //console.log("TODOS OS DADOS DO FORM 2 TESTE", dataMosfet2)

        //console.log("TODOS OS DADOS DO FORM 2 TESTE", agrupFormsMosfets)

        const addMosfet = agrupFormsMosfets = axios.post("http://localhost:5000/mosfets", agrupFormsMosfets)
        .then(function (response) {
            console.log("Sucesso", response)
            const msgMosf1WasInseted = response.data.msgMosf1WasInseted
            const msgMosf2WasInseted = response.data.msgMosf2WasInseted
            const isChannelCompatible = response.data.checkChannel.checkChannelMosfet_2
            const responseChannelCompatible = response.data.checkChannel.msgMosfet_2_compatible
            const calculateEletricalPower = response.data.calculate_eletrical_power.calculateEletricalPower
            const checkResistanceDrainSource = response.data.check_resistance_drainSource.checkResistanceDrainSource

            //document.getElementById('msn', formMosfet).innerText = responseChannelCompatible

            if (!isChannelCompatible || !calculateEletricalPower || !checkResistanceDrainSource) {
                mosfetForm2.classList.add('erro')
            } else {
                mosfetForm2.classList.add('sucess')
            }

            if (!isChannelCompatible) {
                document.getElementById('channelMosfet_2').classList.add('erro')
            }
            if (!checkResistanceDrainSource) {
                document.getElementById('resistanceDraiSource_2').classList.add('erro')
            }
            if (!calculateEletricalPower) {
                document.getElementById('drainCurrent_2').classList.add('erro')
                document.getElementById('voltageDrainSource_2').classList.add('erro')
            }

        })
        .catch(function (response) {
            console.log("Erro", response)
            mosfetForm2.classList.add('erro')
            document.getElementById('msn', formMosfet).innerText = "Erro 404 - Servidor não encontrado!!!"
        })

        
        
    }

    return (

        <>
            <Button color="primary" style={{ position: 'fixed', right: '50px', bottom: '50px', borderRadius: '50px', height: '100px', width: '100px' }} >
                <RefreshCcw size={30} />
            </Button>

            <Container className="dataTransistor">
                <NavComponent />
                <Form onSubmit={handleSubmit}>
                    <div className="frmComparator box-sidebar">
                        <div id='mosfetForm1' className="TR-01 py-2  px-3">
                            <Form id='Form1' class="col-12 ">
                                <h2>MOSFET-01</h2>
                                <FormMosfet idForm="1" />
                            </Form>
                        </div>
                        <div id='mosfetForm2' className="TR-02 py-2  px-3">
                            <Form id='Form2' class="col-12">
                                <h2>MOSFET-02</h2>
                                <FormMosfet idForm="2" />
                            </Form>

                        </div>
                        <Button type="submit">Buscar/ Comparar</Button>
                    </div>
                </Form>
            </Container>
        </>
    );
}

export default DataFets;