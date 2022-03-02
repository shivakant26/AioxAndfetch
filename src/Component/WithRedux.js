import React from "react";
import { getData } from "../Redux/Action/action";
import { connect } from "react-redux";

class WithRedux extends React.Component{
    
    render(){
        return(
            <div>
                <h1>WithRedux</h1>
                <button onClick={()=>{this.props.gethandler()}}>get data</button>
                {
                    this.props ? "yes" : "no"
                }
            </div>
        )
    }
}
const mapStateToProps = state =>{
    console.log("state",state);
    return {data:state.data}
}
const mapDispatchToProps = dispatch => {
    return { 
        gethandler:()=> dispatch(getData())
     }
  }
  

export default connect(mapStateToProps , mapDispatchToProps)(WithRedux);