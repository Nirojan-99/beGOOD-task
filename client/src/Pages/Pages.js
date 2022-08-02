import { Route, Routes } from "react-router";
//pages
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Error from "./Error/Error";
import Profile from "./Profile/Profile";
import Vehicle from "./Vehicle/Vehicle";
import Vehicles from "./Vehicles/Vehicles";

function Pages() {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/vehicle/:id" element={<Vehicle />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Pages;
