import { Navigate, Outlet } from "react-router-dom";
import Auth from "./Auth";

const ProtectedRoutes = () => {
    const isAuth = Auth();
  return isAuth? <Outlet></Outlet> : <Navigate to="/login" />;
}

export default ProtectedRoutes