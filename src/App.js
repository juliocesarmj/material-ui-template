import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TemplateDefault from './Templates/Default';
import TemplatePage from './Templates/Page';

import CustomersList from './pages/customers/List';
import Home from './pages/Home';
import CustomersRegister from './pages/customers/Register';

import ProductsList from './pages/products/List';
import ProductsRegister from './pages/products/Register';

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/customers/add">
            <TemplatePage
              title="Cadastro de Clientes"
              Component={CustomersRegister}
            />
          </Route>
          <Route path="/customers">
            <TemplatePage title="Lista de Clientes" Component={CustomersList} />
          </Route>
          <Route path="/products/add">
            <TemplatePage
              title="Cadastro de Produtos"
              Component={ProductsRegister}
            />
          </Route>
          <Route path="/products">
            <TemplatePage title="Lista de Produtos" Component={ProductsList} />
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
