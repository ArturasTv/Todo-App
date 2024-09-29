import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTask from "./pages/add-task";
import Home from "./pages/home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
