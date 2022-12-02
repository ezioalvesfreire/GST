import React from "react";
import './DataFets.css';
import axios from "axios";
import FormMosfet from "../components/FormMosfet";
import { Button, Container, Form, Input } from "reactstrap";
import NavComponent from "../components/NavComponent";
import { Check, RefreshCcw, Info } from "react-feather";



const DataFets = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.clear()

        let formMosfet = e.target;

        document.getElementById('mosfetForm2', formMosfet).classList.remove('erro')
        document.getElementById('mosfetForm2', formMosfet).classList.remove('sucess')

        const formDataMosfet = new FormData(formMosfet)
        const dataMosfet = Object.fromEntries(formDataMosfet)

        console.log("TODOS OS DADOS DO FORM 1", dataMosfet)


        const addMosfet = dataMosfet = axios.post("http://localhost:5000/mosfets", dataMosfet)
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
                    document.getElementById('mosfetForm2', formMosfet).classList.add('erro')
                } else {
                    document.getElementById('mosfetForm2', formMosfet).classList.add('sucess')
                }
            })
            .catch(function (response) {
                console.log("Erro", response)
                document.getElementById('mosfetForm2', formMosfet).classList.add('erro')
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
                            <div className="infoFormMosfet"
                             title="Informe nos campos de MOSFET-01
                                    os valores do mosfet original do equipamento">
                                <Info size={30} />
                            </div>
                            <div id='Form1' class="col-12 ">
                                <h2>MOSFET-01</h2>
                                <FormMosfet idForm="1" />
                            </div>
                        </div>
                        <div id='mosfetForm2' className="TR-02 py-2  px-3">
                            <div className="infoFormMosfet"
                                title="Informe nos campos de MOSFET-02
                                        os valores do mosfet que você acredite
                                        que seja equivalente" >
                                <Info size={30} />
                            </div>
                            <div id='Form2' class="col-12">
                                <h2>MOSFET-02</h2>
                                <FormMosfet idForm="2" />
                                <div id="msn" className="msn"></div>
                            </div>

                        </div>
                        <Button type="submit">Buscar/ Comparar</Button>
                    </div>
                </Form>
            </Container>
        </>
    );
}

export default DataFets;