import React from "react";
import './DataFets.css';
import FormMosfet from "../components/FormMosfet";
import { Button, Container, Form, Input } from "reactstrap";
import NavComponent from "../components/NavComponent";
import { Check, RefreshCcw } from "react-feather";



const DataFets = () => {

    return (

        <>
            <Button color="primary" style={{position: 'fixed', right: '50px', bottom: '50px', borderRadius: '50px', height: '100px', width: '100px'}} >
                <RefreshCcw size={30} />
            </Button>

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
        </>
    );
}

export default DataFets;