import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import Register from "./Pages/Login/Register";
import ForgotPassword from "./Pages/Login/ForgotPassword";
import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import ManageDoctor from "./Pages/Dashboard/ManageDoctor";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor></AddDoctor>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageDoctor"
            element={
              <RequireAdmin>
                <ManageDoctor></ManageDoctor>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
