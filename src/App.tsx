import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import PageRouter from "./router/PageRouter";
import './styles/index.css';


export const App = () => {
  return (
    <div className={"w-screen h-screen flex items-center justify-center"}>
      <Router>
        <PageRouter/>
      </Router>
    </div>
  );
};

export default App;
