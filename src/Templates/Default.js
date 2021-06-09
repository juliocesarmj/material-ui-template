import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../partials/Header/Header';

const useStyles = makeStyles(() => ({
  container: {
    padding: '15px',
  },
}));

const Default = ({ children }) => {
  const classes = useStyles();
  return (
    //algo aqui
    <>
      <Header />
      <Container className={classes.container}>{children}</Container>
    </>
  );
};
export default Default;
