import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Suspense, lazy, useState, useEffect, useCallback } from "react";

import SideBar from "./components/SideBar";
import ErrorPage from "./pages/ErrorPage";
import Loading from "./components/Loading";

const App = () => {
  const [list, setList] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const fetchListHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Fetching Failed");
      }
      const data = await response.json();

      const transformedList = data.map((data) => {
        return {
          id: data.id,
          title: data.title,
          price: data.price,
          description: data.description,
          category: data.category,
          image: data.image,
          rate: data.rating.rate,
          rate_count: data.rating.count,
        };
      });

      setList(transformedList);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  });

  useEffect(() => {
    fetchListHandler();
  }, [fetchListHandler]);

  const Home = lazy(() => import("./pages/Home"));
  const AddToTable = lazy(() => import("./pages/AddToTable"));

  return (
    <>
      {isLoading ? (
        <Suspense fallback={<Loading />}>
          <Router>
            <div className="w-full h-screen">
              <SideBar />
              <Switch>
                <Route exact path="/">
                  <Home list={list} />
                </Route>
                <Route exact path="/add">
                  <AddToTable />
                </Route>
                <Route path="*">
                  <ErrorPage error={404} />
                </Route>
              </Switch>
            </div>
          </Router>
        </Suspense>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default App;
