import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Suspense, lazy, useState, useEffect } from "react";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import SideBar from "./components/SideBar";
import ErrorPage from "./pages/ErrorPage";
import Loading from "./components/Loading";

const baseURL = "https://json.xstack.ir/api/v1/products";

const App = () => {
  const [list, setList] = useState([]);

  const {
    data: products,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(baseURL);
      return response;
    },
  });

  useEffect(() => {
    if (products !== undefined) {
      setList(products.data.data);
    }
  }, [products]);

  const removeHandler = (key) => {
    const newList = list.filter((item) => item.id != key);
    setList(newList);
  };

  const AddToTable = lazy(() => import("./pages/AddToTable"));
  const Products = lazy(() => import("./pages/Products"));
  const Product = lazy(() => import("./pages/Product"));
  if (isLoading) return <Loading />;
  if (isError) return <p>{error.message}</p>;
  return (
    <>
      {list !== undefined ? (
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
      ) : (
        <Loading />
      )}
    </>
  );
};

export default App;
