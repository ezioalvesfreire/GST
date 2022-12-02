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

        const formDataMosfet = new FormData(e.target)
        const dataMosfet = Object.fromEntries(formDataMosfet)

        console.log("TODOS OS DADOS DO FORM 1", dataMosfet)


        const addMosfet = dataMosfet = axios.post("http://localhost:5000/mosfets", dataMosfet)
            .then(function (response) {
                console.log("Sucesso", response)
            })
            .catch(function (response) {
                console.log("Erro", response)
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
                        <div className="TR-01 py-2  px-3">
                            <div className="infoForm"
                             title="Informe nos campos de MOSFET-01
                                    os valores do mosfet original do equipamento">
                                <Info size={30} />
                            </div>
                            <div id='Form1' class="col-12 ">
                                <h2>MOSFET-01</h2>
                                <FormMosfet idForm="1" />
                            </div>
                        </div>
                        <div className="TR-02 py-2  px-3">
                            <div className="infoForm"
                                 title="Informe nos campos de MOSFET-02
                                        os valores do mosfet que você acredite
                                        que seja equivalente" >
                                <Info size={30} />
                            </div>
                            <div id='Form2' class="col-12">
                                <h2>MOSFET-02</h2>
                                <FormMosfet idForm="2" />
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