import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import {  useState } from "react";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import  NotFound  from "./pages/notFound/NotFound";

function App() {
  const [sidebarShrink, setSidebarShrink] = useState(false);

  const handleSidebarShrink = () => {
    if (sidebarShrink) {
      setSidebarShrink(false);
    } else {
      setSidebarShrink(true);
    }
  };

  
  return (
    <Router>
      <div className="container">
        <Sidebar handleSidebarShrink={handleSidebarShrink} sidebarShrink={sidebarShrink} />

        <div className={sidebarShrink? "increaseWidth" : "wrapper"}>
          <Topbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newProduct">
              <NewProduct />
            </Route>
            <Route path="/404">
              <NotFound />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
