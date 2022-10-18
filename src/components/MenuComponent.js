import React from "react";
import './MenuComponent.css';
import SearchEqual from '../pages/SearchEqual';

import { Button, Container } from "reactstrap";
import { Link } from 'react-router-dom';




let teste = 10;

const MenuComponent = () => {

    return (
        <Container className="Menu mb-0">
            <h2>MENU</h2>
            <div className="d-grid gap-1.5 col-9 mx-auto">
                <Link to="/SearchEqual" className="btn btn-success " onclick="myFunction()">Nova busca</Link>
                <Link to="/DataComponent" className="btn btn-primary ">Comparar</Link>
                <Link to="/SearchEqual" className="btn btn-primary">Buscar Equiv.</Link>
            </div>

            <div className="Teste bg-primary">dfkgmdgçjdfg</div>
            <button className=" bg-primary2" type="button">bla-bla-bla</button>

        </Container>
    );

}

export default MenuComponent;