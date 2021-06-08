import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TemplateDefault from './Templates/Default';
import TemplatePage from './Templates/Page';

import CustomersList from './pages/customers/List';
import RegisterCustomers from './pages/customers/Register';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/customers/add">
            <TemplatePage
              title="Cadastro de Clientes"
              Component={RegisterCustomers}
            />
          </Route>
          <Route path="/customers">
            <TemplatePage
              title="Listagem de Clientes"
              Component={CustomersList}
            />
          </Route>
          <Route path="/">
            <TemplatePage title="Página inicial" Component={Home} />
          </Route>
        </Switch>
      </TemplateDefault>
    </Router>
  );
};

export default App;
