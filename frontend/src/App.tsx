import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Servers from "./pages/Servers";
import DataViewer from "./pages/DataViewer";
import Accounts from "./pages/Accounts";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<h1>Welcome to the Frontend</h1>} />
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/servers" element={<Servers />} />
            <Route path="/data_viewer" element={<DataViewer />} />
            <Route path="/account" element={<Accounts />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
