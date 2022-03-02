import axios from "axios";
import React from "react";
import { Button, Card } from "react-bootstrap";

class ByAxios extends React.Component {
    constructor() {
        super();
        this.state = {
            Record: [],
            key:"",
            filterdata:[]
        }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log("ByAxio",response.data);
                this.setState({ 
                    Record: response.data,
                    filterdata:response.data
                 });
            })
    }

    search(e){
        var key = e.target.value;
        let filterdata = this.state.filterdata.filter((item)=>{
            return item.title.includes(key.toLowerCase())
        })
        this.setState({
            Record:filterdata,
            key:key
        })
    }
    render() {
        return (
            <div className="container">
                <div className="heading">
                    <h1>By Axios</h1>
                    <div className="search-box">
                    <input type="text"
                    placeholder="search here...."
                    value={this.state.key}
                    onChange={(e)=>{this.search(e)}}
                     />
                    </div>
                    
                    {
                        this.state.Record ?
                            <div className="row">
                                {
                                    this.state.Record.map((item, i) =>
                                    <div className="col-md-3" key={i}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Text>{item.body}</Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                        </div>
                                    )
                                }
                            </div>
                            : "no"
                    }
                </div>
            </div>
        )
    }
}

export default ByAxios;