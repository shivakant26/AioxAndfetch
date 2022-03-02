import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component{
    render(){
        return(
            <div className="menu">
                <Link to="/">WithoutRedux</Link>
                <Link to="/withredux">WithRedux</Link>
                <Link to="/byaxios">ByAxios</Link>
            </div>
        )
    }
}

export default Menu;