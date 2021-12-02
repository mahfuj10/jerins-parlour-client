import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Book from './Pages/Book/Book/Book';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
// npm install swiper@6.8.4

function App() {
  return (

    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Route path="/book/:id">
          <Book />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
