import './style.css';
import { AppRoutes } from './routes/routes';
import { AuthEmailProvider } from './contexts/authEmail';

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
