import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Router
import AuthRouter from './routers/authRouter';
import AppRouter from './routers/appRouter';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Router>{isLoggedIn ? <AppRouter /> : <AuthRouter />}</Router>
    </div>
  );
};

export default App;
