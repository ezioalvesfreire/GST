import { React} from "react";
import './NavComponent.css';

import { Button } from "reactstrap";

const setMode = (e) => {
    e.preventDefault();
}

const NavComponent = () => {

    return (
        <div className="bg-btn">
            <Button className="btn" onClick={setMode}>Comparar</Button>
            <Button className="btn" onClick={setMode}> Buscar equivalente</Button>
        </div>
    );
}

export default NavComponent;
