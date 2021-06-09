import { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import CustomerCard from '../../components/CustomerCard';
import Loading from '../../components/Loading';
import Toasty from '../../components/Toasty';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: theme.spacing(2),
  },
}));
const List = () => {
  const classes = useStyles();
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toasty, setToasty] = useState(false);
  const [severity, setSeverity] = useState('error');
  const [text, setText] = useState('Erro ao excluir o cadastro');

  useEffect(() => {
    setLoading(true);
    axios.get('https://reqres.in/api/users').then((r) => {
      const { data } = r.data;
      setCustomers(data);
      setLoading(false);
    });
  }, []);

  const handleRemoveCustomer = (id) => {
    setLoading(true);
    axios.delete(`https://reqres.in/api/users/${id}`).then(() => {
      const newCustomersState = customers.filter(
        (customer) => customer.id !== id,
      );
      setCustomers(newCustomersState);
      setLoading(false);
      setToasty(true);
      setSeverity('warning');
      setText('Cadastro removido com sucesso');
    });
  };
  return (
    <>
      {loading === true ? <Loading open={loading} /> : ''}
      <Toasty
        open={toasty}
        severity={severity}
        text={text}
        onClose={() => setToasty(false)}
      />
      <Grid container>
        {customers.map((item) => (
          <Grid item xs={12} md={4} key={item.id}>
            <CustomerCard
              id={item.id}
              name={item.first_name}
              lastname={item.last_name}
              email={item.email}
              avatar={item.avatar}
              className={classes.card}
              onRemoveCustomer={handleRemoveCustomer}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default List;
