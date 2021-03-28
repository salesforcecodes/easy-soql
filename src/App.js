import { useState } from 'react';
import { Button, Typography, AppBar, Card, CardActions, CardContent, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { Search } from '@material-ui/icons';

import useStyles from './styles';
import theme from './theme';
import './App.css';
import Authenticate from './components/Authenticate';

function App() {
  const classes = useStyles();
  const [isAuth, setIsAuth] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Search className={classes.logo} />
          <Typography variant="h6">Easy SOQL</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          {!isAuth &&
            <Authenticate></Authenticate>
          }
          {isAuth &&
            <p>Query builder here</p>
          }
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
