import React from "react";
import './MenuComponent.css';


import { Container} from "reactstrap";
import { NavLink } from 'react-router-dom';


let teste = 10;

const MenuComponent = () => {

    return (
        <Container className="Menu mb-0">
            <h2>MENU</h2>
            <div className="d-grid gap-1.5 col-9 mx-auto">
                <NavLink to="/DataFets" className="btn btn-success " onclick="myFunction()">Mosfets</NavLink>
                <NavLink to="/DataPwrTransistor" className="btn btn-success ">Power Transistor</NavLink>

            </div>
            {/*<div className="Opt Teste bg-primary">dfkgmdgçjdfg</div>
            <button className="Opt bg-primary2" type="button">bla-bla-bla</button>*/}
        </Container>
    );

}

export default MenuComponent;