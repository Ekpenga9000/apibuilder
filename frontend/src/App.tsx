import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Servers from "./pages/Servers";
import DataViewer from "./pages/DataViewer";
import Accounts from "./pages/Accounts";
import ServerDetails from "./pages/ServerDetails";
import APIDetails from "./components/APIDetails";
import NotFound from "./pages/NotFound";
import Welcome from "./pages/Welcome";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Register from "./pages/Register";
import { ProtectedRoute } from "./ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Toaster position="top-right" reverseOrder={false} />
        <AuthProvider>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/servers" element={<Servers />} />
                <Route path="/servers/:serverId" element={<ServerDetails />} />
                <Route
                  path="/servers/:serverId/apis/:apiId"
                  element={<APIDetails />}
                />
                <Route path="/data_viewer" element={<DataViewer />} />
                <Route path="/account" element={<Accounts />} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
