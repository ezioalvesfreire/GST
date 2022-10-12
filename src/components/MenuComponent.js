import React from "react";
import './MenuComponent.css';
import { Button, Container } from "reactstrap";


let teste = 10;

const MenuComponent = () => {

    return (
        <Container className="Menu">
            <h2>MENU</h2>
            <div class="d-grid gap-1.5 col-9 mx-auto">
                <button class="btn btn-primary" type="button">Nova busca</button>
                <button class="btn btn-success" type="button">Comparar</button>
                <button class="btn btn-primary" type="button">Buscar Equi.</button>               
            </div>
        </Container>
    );
}

export default MenuComponent;