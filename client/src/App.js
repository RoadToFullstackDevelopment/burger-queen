import React from 'react';
import Main from './components/Main';
import Register from './components/Register';
import Login from './components/Login';
import Kitchen from './components/Kitchen';
import Salon from './components/Salon';
import SecretRoute from './components/SecretRoute';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <SecretRoute exact path="/kitchen" component={Kitchen} />
          <SecretRoute exact path="/salon" component={Salon} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
