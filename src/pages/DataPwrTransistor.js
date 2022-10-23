import React from "react";
import './DataFets.css';
import FormTrComponent from "../components/FormTrComponent";
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
                        <FormTrComponent />
                    </div>
                </div>
                <div className="TR-02 py-2  px-3">                   
                    <div class="col-12">
                    <h2>Power Transistor-02</h2>
                        <FormTrComponent />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default DataFets;