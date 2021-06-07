import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TemplateDefault from './Templates/Default';
import TemplatePage from './Templates/Page';

import Customers from './pages/Customers';
import Home from './pages/Home';

const App = () => {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
          <Route path="/customers">
            <TemplatePage title="Clientes" Component={Customers} />
          </Route>
          <Route path="/">
            <TemplatePage title="Página inicial" Component={Home} />
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>
  );
};

export default App;
