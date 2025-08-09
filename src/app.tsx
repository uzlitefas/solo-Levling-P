import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/shared/navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
