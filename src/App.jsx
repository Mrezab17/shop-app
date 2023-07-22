import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import AddToTable from "./pages/AddToTable";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <Router>
      <div className="w-full h-screen">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/add">
            <AddToTable />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
