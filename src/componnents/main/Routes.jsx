import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom'
import Cemetery from '../Cemetery';
import Verify from '../../screen/Verify';

// import { Container } from './styles';

function Routes() {
  return (
    <Router>
        <Switch>
          <Route path="/about">
          <h1>about</h1>
          </Route>
  <Route path="/users/:id" children={<Users/>}> 
                
          </Route>
          <Route path="/result/:name" children={<Cemetery />}/>
          <Route path="/" children={<Verify />}/>
        </Switch>
    </Router>
  );
}
// import { Container } from './styles';

function Users() {
    const {id} = useParams()
  return (
  <h1>Usert {id}</h1>
  );
}


export default Routes