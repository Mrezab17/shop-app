import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Suspense, lazy, useState, useEffect, useCallback } from "react";
import axios from "axios";

import SideBar from "./components/SideBar";
import ErrorPage from "./pages/ErrorPage";
import Loading from "./components/Loading";
import Products from "./pages/Products";

const baseURL = "https://json.xstack.ir/api/v1/products";

const App = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  async function fetchDataHandler() {
    setIsLoading(true);
    const response = await axios
      .get(baseURL)
      .then()
      .catch((error) => {
        setError(error);
      });

    setList(response.data.data);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchDataHandler();
  }, []);

  const AddToTable = lazy(() => import("./pages/AddToTable"));
  const Products = lazy(() => import("./pages/Products"));
  const Product = lazy(() => import("./pages/Product"));

  const removeHandler = (key) => {
    const newList = list.filter((item) => item.id != key);
    setList(newList);
    console.log(newList);
  };

  return (
    <>
      {!isLoading && error ? (
        <Suspense fallback={<Loading />}>
          <Router>
            <div className="w-full h-screen">
              <SideBar />
              <Switch>
                <Route exact path="/">
                  <Redirect to="/products/1" />
                </Route>
                <Route exact path="/add">
                  <AddToTable />
                </Route>
                <Route exact path="/products/:id">
                  <Products list={list} onRemove={removeHandler} />
                </Route>
                <Route exact path="/product/:id">
                  <Product list={list} />
                </Route>

                <Route path="*">
                  <ErrorPage error={404} />
                </Route>
              </Switch>
            </div>
          </Router>
        </Suspense>
      ) : isLoading ? (
        <Loading />
      ) : (
        <p>{error}</p>
      )}
    </>
  );
};

export default App;
