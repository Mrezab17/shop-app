import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loading from "./components/Loading";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import AddToTable from "./pages/AddToTable";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <Router>
      <div className="w-full h-screen">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddToTable />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
