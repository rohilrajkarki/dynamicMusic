import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";



function App() {
  const user = false;

  return (

    <Router>
      <Switch >
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <ProductDetails />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
