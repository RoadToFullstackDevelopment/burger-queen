import React from 'react';
import Main from './components/Main';
import Register from './components/Register';
import Login from './components/Login';
import Kitchen from './components/Kitchen';
import KitchenOrders from './components/KitchenOrders';
import Salon from './components/Salon';
import Menu from './components/Menu';
import SalonOrders from './components/SalonOrders';
import AppStandard from './AppStandard';
// import SecretRoute from './components/SecretRoute';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <AppStandard className="App">
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route exact path="/kitchen" component={Kitchen} />
          <Route exact path="/kitchenorders" component={KitchenOrders} />
          <Route exact path="/salonorders" component={SalonOrders} />
          <Route exact path="/salon" component={Salon} />
          <Route exact path="/menu" component={Menu} />
        </Switch>
      </AppStandard>
    </BrowserRouter>
  );
}

export default App;
