import { makeStyles, Button, TextField, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(3),
  },
  inputWrapper: {
    width: '80%',
    marginBottom: '20px',
  },
  cont: {
    padding: theme.spacing(2),
    marginTop: '20px',
  },
  containerForm: {
    padding: theme.spacing(2),
    marginTop: '20px',
    background: 'rgba(0, 0, 0, 0.04)',
    borderRadius: '8px',
  },
  btn: {
    marginTop: '10px',
  },
}));
const Register = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.containerForm}>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <TextField label="Nome do produto" className={classes.inputWrapper} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <TextField label="Categoria" className={classes.inputWrapper} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <TextField label="Fabricante" className={classes.inputWrapper} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <TextField label="Número de série" className={classes.inputWrapper} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <TextField
          label="Quantidade em estoque"
          className={classes.inputWrapper}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" className={classes.btn}>
          Cadastrar
        </Button>
      </Grid>
    </Grid>
  );
};

export default Register;
