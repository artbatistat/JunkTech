import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './style.css';
import { AppRoutes } from './routes/routes';
import { AuthGoogleProvider } from './contexts/authGoogle';


function App() {
  return (
  <>
   (
    <AuthGoogleProvider>
    <AppRoutes/>
    </AuthGoogleProvider>
    )
  </>
  );
}

export default App;
