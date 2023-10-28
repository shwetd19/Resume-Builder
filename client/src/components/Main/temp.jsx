import "./styles.css";
import { Link } from "react-router-dom";

export const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};


