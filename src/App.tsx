import Home from "./Home/Home";
import Auth from "./Auth/Auth";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Auth/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
