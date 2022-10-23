import React from "react";
import './DataFets.css';
import FormTrComponent from "../components/FormTrComponent";
import { Container, Form, Input } from "reactstrap";
import NavComponent from "../components/NavComponent";



const DataFets = () => {

    return (

        <Container className="dataTransistor mt-5 ">
            <NavComponent/>
            <div className="frmComparator box-sidebar">
                <div class="col-12 ">
                    <div className="TR-01 py-2  px-3">
                        <h2>MOSFET-01</h2>
                        <FormTrComponent />
                    </div>
                </div>
                <div className="TR-02">
                    <h2>MOSFET-02</h2>
                    <div class="col-12">
                        <FormTrComponent />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default DataFets;