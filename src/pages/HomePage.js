import React from "react";
import MenuComponent from "../components/MenuComponent";
import TopComponent from "../components/TopComponent";

const HomePageComponent = () => {

    return(
        <div className="HomePage">            
            <TopComponent/>
            <MenuComponent/>
        </div>
    );
}

export default HomePageComponent;