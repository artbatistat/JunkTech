import './style.css';
import { AppRoutes } from './routes/routes';
import {AuthEmailProvider } from './contexts/authEmail';
import { useEffect } from 'react';


function App() {

  return (
  <>
   (
    <AuthEmailProvider>
    <AppRoutes/>
    </AuthEmailProvider>
    )
  </>
  );
}

export default App;
