import { BrowserRouter } from 'react-router-dom';
import UserRoutes from 'UserRoutes';

import './App.module.css';

function App() {
  return (
    <BrowserRouter basename="/pizza_app">
      <UserRoutes />;
    </BrowserRouter>
  );
}

export default App;
