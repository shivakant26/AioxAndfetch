import React from "react";
import { Table } from "react-bootstrap";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            userList: []
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                response.json().then((res) => {
                    // console.log("res",res);
                    this.setState({
                        userList: res
                    })
                })
            })
    }
    render() {
        return (
            <div className="main_wr">
                <h1>WithoutRedux</h1>
                {
                    this.state.userList ? <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Discription</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.userList.map((item, i) =>
                                  <tr key={i}>
                                      <td>{i}</td>
                                  <td>{item.title}</td>
                                  <td>{item.body}</td>
                                </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                        : <p>Record Not Found</p>
    }
            </div>
        )
    }
}

export default Home;