import { useState } from 'react';
import { makeStyles, Button, TextField, Grid } from '@material-ui/core';
import axios from 'axios';

import Toasty from '../../components/Toasty';
import Loading from '../../components/Loading';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(3),
  },
  inputWrapper: {
    width: '90%',
    marginBottom: '20px',
  },
  cont: {
    padding: theme.spacing(2),
    marginTop: '20px',
  },
  containerForm: {
    padding: theme.spacing(2),
    marginTop: '20px',
    background: 'rgba(0, 0, 0, 0.02)',
    borderRadius: '8px',
    width: '850px',
  },
  btn: {
    marginTop: '10px',
  },
}));
const Register = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [toasty, setToasty] = useState(false);
  const [form, setForm] = useState({
    name: {
      value: '',
      error: false,
    },
    job: {
      value: '',
      error: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: {
        value,
      },
    });
  };
  const handleRegisterButton = () => {
    let newStateForm = {
      ...form,
    };
    let hasError = false;
    if (!form.name.value) {
      hasError = true;
      newStateForm.name = {
        value: form.name.value,
        error: true,
        helperText: 'Preencha o campo nome corretamente',
      };
    }

    if (!form.job.value) {
      hasError = true;
      newStateForm.job = {
        value: form.job.value,
        error: true,
        helperText: 'Preencha o campo cargo corretamente',
      };
    }
    if (hasError) {
      return setForm(newStateForm);
    }
    setLoading(true);
    axios
      .post('https://reqres.in/api/users', {
        name: form.name.value,
        job: form.job.value,
      })
      .then((r) => {
        setLoading(false);
        setToasty(true);
        setForm({
          name: {
            value: '',
            error: false,
          },
          job: {
            value: '',
            error: false,
          },
        });
      });
  };
  return (
    <>
      {loading === true ? <Loading open={loading} /> : ''}
      <Toasty
        open={toasty}
        severity="success"
        text="Cadastro realizado com sucesso"
        onClose={() => setToasty(false)}
      />
      <Grid container className={classes.containerForm}>
        <Grid item xs={12} sm={6} md={6} lg={7}>
          <TextField
            error={form.name.error}
            helperText={form.name.error ? form.name.helperText : ''}
            label="Digite seu nome"
            name="name"
            className={classes.inputWrapper}
            onChange={handleInputChange}
            value={form.name.value}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={7}>
          <TextField
            error={form.job.error}
            helperText={form.job.error ? form.job.helperText : ''}
            label="Digite seu cargo"
            name="job"
            className={classes.inputWrapper}
            onChange={handleInputChange}
            value={form.job.value}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={handleRegisterButton}
          >
            Cadastrar
          </Button>
        </Grid>
      </Grid>
    </>
    /*<Grid item xs={12} sm={6} md={6} lg={4}>
        <TextField
          label="Casa/Apartamento"
          type="number"
          className={classes.inputWrapper}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <TextField
          label="Número/Complemento"
          className={classes.inputWrapper}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <TextField label="Bairro" className={classes.inputWrapper} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <TextField label="Cidade" className={classes.inputWrapper} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <TextField label="Estado" className={classes.inputWrapper} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <TextField label="Estado civil" className={classes.inputWrapper} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={2}>
        <TextField label="CPF" className={classes.inputWrapper} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={1}>
        <TextField label="CEP" className={classes.inputWrapper} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <TextField label="Email" className={classes.inputWrapper} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <TextField label="Telefone" className={classes.inputWrapper} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <TextField label="Facebook" className={classes.inputWrapper} />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" className={classes.btn}>
          Cadastrar
        </Button>
  </Grid>*/
  );
};

export default Register;
