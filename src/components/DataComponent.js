import React from "react";
import './DataComponent.css';
import FormTrComponent from "./FormTrComponent";
import SearchEqual from "../pages/SearchEqual";
import { Container, Form, Input } from "reactstrap";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const DataDoComponet = () => {

    return (

        <Container className="dataTransistor mt-5 ">
          
                <Routes>
                    <Route path="/SearchEqual" element={<SearchEqual />} />
                </Routes>
         


            <Form>
                <div class="col-5 ">
                    <Input className="mb-4" type="select">
                        <option>MOSFET</option>
                        <option>POWER TRANSISTOR</option>
                    </Input>
                </div>
            </Form>
            <div className="frmComparator box-sidebar">
                <div class="col-12 ">
                    <div className="TR-01 py-2  px-3">
                        <h2>TR-01</h2>
                        <FormTrComponent />
                    </div>
                </div>
                <div className="TR-02">
                    <h2>TR-02</h2>
                    <div class="col-12">
                        <FormTrComponent />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default DataDoComponet;