import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Toaster position="top-right" reverseOrder={false} />
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Welcome to the Frontend</h1>} />
          <Route path="/dashboard" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
