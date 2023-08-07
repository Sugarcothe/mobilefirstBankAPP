import { Route, Routes } from "react-router-dom"
import "./App.css"
import Login from './components/Login/Login.jsx'
import Register from "./components/Register/Register.jsx";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {

  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App
