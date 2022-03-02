import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component{
    render(){
        return(
            <div className="menu">
                <Link to="/">WithoutRedux</Link>
                <Link to="/withredux">WithRedux</Link>
                <Link to="/byaxios">ByAxios</Link>
                <Link to="/func">Functional Component</Link>
            </div>
        )
    }
}

export default Menu;