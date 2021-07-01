import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  Login  from './Auth/index';
import Dashboard from './Dashboard/index';
import DocumentForm from './DocumentForm/index';
 import SignPdf from './SignPdf/index'
 import AllProcess from './Process/index';

function Routers() {
  return (
  <Router>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/all-process" component={AllProcess} />
            <Route path="/submit-document" component={DocumentForm} />
            <Route path="/sign-pdf" component={SignPdf} />
        </Switch>
    </Router>
  );
}

export default Routers;