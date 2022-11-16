import React from "react";
import './DataFets.css';
import axios from "axios";
import FormMosfet from "../components/FormMosfet";
import { Button, Container, Form, Input } from "reactstrap";
import NavComponent from "../components/NavComponent";
import { Check, RefreshCcw } from "react-feather";



const DataFets = () => {

    const handleSubmit = async (e) => {//COLOQUEI O async
        e.preventDefault();

        //PEGO TODOS OS DADOS DO Form1
        const formData = new FormData(document.getElementById("Form1", e.target))//DADOS DO FORM 1 QUE ESTA DENTRO DO e.target QUE É O FORM SUBMIT
        const data = Object.fromEntries(formData)
        console.log("TODOS OS DADOS DO FORM 1", data)
        //alert(data1);

        //PEGO TODOS OS DADOS DO Form2
        const formData2 = new FormData(document.getElementById("Form2", e.target))//DADOS DO FORM 2 QUE ESTA DENTRO DO e.target QUE É O FORM SUBMIT
        const data2 = Object.fromEntries(formData2)
        console.log("TODOS OS DADOS DO FORM 2", data2);
        //alert(data2);

        const addPost = data = axios.post("http://localhost:5000/mosfets", data)
            .then(() => {

                console.log("Sucesso", addPost)
            }).catch(() => {
                console.log("Erro", addPost)
            })

        const addPost2 = data2 = axios.post("http://localhost:5000/mosfets", data2)
            .then(() => {

                console.log("Sucesso", addPost2)
            }).catch(() => {
                console.log("Erro", addPost2)
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
                            <Form id='Form1' class="col-12 ">
                                <h2>MOSFET-01</h2>
                                <FormMosfet/>
                            </Form>
                        </div>
                        <div className="TR-02 py-2  px-3">
                            <Form id='Form2' class="col-12">
                                <h2>MOSFET-02</h2>
                                <FormMosfet/>
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