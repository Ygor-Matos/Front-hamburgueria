import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Hamburguer from "../Screens/Hamburguer/Hamburguer";
import Ingrediente from "../Screens/Ingrediente/Ingrediente";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Route component={ Hamburguer } path="/" exact/>
            <Route component={ Ingrediente }  path="/Ingrediente" />
        </BrowserRouter>


    );
}

export default AppRoutes;