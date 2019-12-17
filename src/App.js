import React from 'react';
import Main from './screens/Main';
import Register from './screens/Register';
import Login from './screens/Login';
import Kitchen from './screens/Kitchen';
import Salon from './screens/Salon';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/kitchen" component={Kitchen} />
        <Route path="/salon" component={Salon} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App