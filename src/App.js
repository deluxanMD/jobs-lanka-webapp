import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Material UI
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './helpers/Theme';

// Router
import AuthRouter from './routers/authRouter';
import AppRouter from './routers/appRouter';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Router>{isLoggedIn ? <AppRouter /> : <AuthRouter />}</Router>
    </ThemeProvider>
  );
};

export default App;
