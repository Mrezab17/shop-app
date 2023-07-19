import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import SideBar from "./components/SideBar";
import Loading from "./components/Loading";

const App = () => {
  const Home = lazy(() => import("./pages/Home"));
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <div className="App">
          <SideBar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/page2" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Suspense>
  );
};

export default App;
