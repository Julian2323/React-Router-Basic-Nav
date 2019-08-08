import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {BrowserRouter as Route} from "react-router-dom";

const App = () => (
  <div>
    <Navigation> 
    </Navigation>
    <Route exact path="/" />
    <Route path="/about" />
    <Route path="/contact" />
  </div>
);

export default App;
