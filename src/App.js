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
import Posts from "./components/Posts";
import SinglePost from "./components/BlogPortion/SinglePost/SinglePost";
import Write from "./components/BlogPortion/Write/Write";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";



const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  // const user = false;

  return (
    <Router>
      <ScrollToTop>
        <Announcement />
        <Navbar user={user} />
        <Switch >
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/post">
            <Posts />
          </Route>
          <Route exact path="/write">
            <Write />
          </Route>
          <Route exact path="/post/:id">
            <SinglePost />
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
