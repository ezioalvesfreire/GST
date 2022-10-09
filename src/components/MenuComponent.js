import React from "react";
import './MenuComponent.css';
import { Button, Container } from "reactstrap";


let teste = 10;

const MenuComponent = () => {

    return (
        <Container className="Menu">
            <h2>MENU</h2>
            <div>
                <Button color="primary">primary</Button>
                {''}
                <Button color="success">success</Button>
                {' '}
                <Button color="primary">primary</Button>
                {' '}
                <Button color="primary">primary</Button>
            </div>
        </Container>
    );
}

export default MenuComponent;