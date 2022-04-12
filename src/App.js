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
import ScrollToTop from "./components/ScrollToTop";
import { useSelector } from "react-redux";



const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  // const user = false;

  return (
    <Router>
      <ScrollToTop>
        <Switch >
          <Route exact path="/">
            <Home />
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
      </ScrollToTop>
    </Router>

  );
}

export default App;
