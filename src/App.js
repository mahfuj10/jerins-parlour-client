import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import './Pages/Style/Style.css';
import PrivateRoute from './PrivateRoute/PrivateRoute';
// npm install swiper@6.8.4

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <Route path="/book/:id">
          </Route>

          <Route path="/register">
            <Register />
          </Route>

        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
