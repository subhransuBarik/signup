import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Navigate,Routes, Route } from "react-router-dom";

function App() {
  const user = localStorage.getItem("token")
  return (
    <div className="App">
      <div className="container">
        <Routes>
          {user && <Route path="/" element={<Home />} />}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
