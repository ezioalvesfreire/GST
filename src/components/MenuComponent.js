import React from "react";
import './MenuComponent.css';
import SearchEqual from '../pages/SearchEqual';
import {Button, Container,  Link} from "reactstrap";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


let teste = 10;

const MenuComponent = () => {

    return (
        <Container className="Menu mb-0">
            <h2>MENU</h2>
            <div className="d-grid gap-1.5 col-9 mx-auto">
                <BrowserRouter>
                <Routes>
                <Route path="../pages/SearchEqual" element={<SearchEqual/>}><button className="btn btn-primary" type="button" onclick="myFunction()">Home</button></Route>
                </Routes>
                </BrowserRouter>
                
               {/* <Link to="../pages/SearchEqual"><button className="btn btn-primary" type="button" onclick="myFunction()">Nova busca</button></Link>
                <a href="#"><button className="btn btn-success" type="button">Comparar</button></a>
                <a href="#"><button className="btn btn-primary" type="button">Buscar Equiv.</button></a>*/}
            </div>
            {/*
            <Button color="bg-primary">primary</Button>              
                  {' '} 
            <div className="Teste bg-primary">dfkgmdgçjdfg</div>
            <button className="bg-primary2" type="button">bla-bla-bla</button>
            */}
        </Container>
    );

}

export default MenuComponent;