import './App.css';
import Home from './Component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import WithRedux from './Component/WithRedux';
import ByAxios from './Component/ByAxios';
import React from 'react';
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/withredux' exact element={<WithRedux />} />
            <Route path='/byaxios' exact element={<ByAxios />} />
          </Routes>
        </Router>
      </div>
    );
  }
  
}

export default App;
