import React from "react";
import './DataFets.css';
import FormMosfet from "../components/FormMosfet";
import { Container, Form, Input } from "reactstrap";
import NavComponent from "../components/NavComponent";



const DataFets = () => {

    return (

        <Container className="dataTransistor ">
            <NavComponent />
            <div className="frmComparator box-sidebar">
                <div className="TR-01 py-2  px-3">
                    <div class="col-12 ">
                        <h2>MOSFET-01</h2>
                        <FormMosfet />
                    </div>
                </div>
                <div className="TR-02 py-2  px-3">
                    <div class="col-12">
                        <h2>MOSFET-02</h2>
                        <FormMosfet />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default DataFets;