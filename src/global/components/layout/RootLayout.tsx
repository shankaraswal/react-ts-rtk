import { NavLink, Outlet } from "react-router-dom";
import { Header } from "../header/Header";

export const RootLayout = () => {
  return (
    <div className="rootLayout">
      <Header />
      <Outlet />
    </div>
  );
};
