import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main/";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Desktop from './components/Desktop2/Desktop';

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/body" element={<Desktop />} />
      <Route path="/creation" element={<Desktop/>} />
    </Routes>
  );
}

export default App;
