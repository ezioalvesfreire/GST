import React from "react";
import './DataFets.css';
import FormPwrTransistor from "../components/FormPwrTransistor";
import { Container, Form, Input } from "reactstrap";
import NavComponent from "../components/NavComponent";



const DataFets = () => {

    return (

        <Container className="dataTransistor ">
            <NavComponent />
            <div className="frmComparator box-sidebar">
                <div className="TR-01 py-2  px-3">
                    <div class="col-12 ">
                        <h2>Power Transistor-01</h2>
                        <FormPwrTransistor />
                    </div>
                </div>
                <div className="TR-02 py-2  px-3">
                    <div class="col-12">
                        <h2>Power Transistor-02</h2>
                        <FormPwrTransistor />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default DataFets;