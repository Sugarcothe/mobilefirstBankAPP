import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Dashboard from "./components/Dashboard/Dashboard";
import Bills from "./components/Bills/Bills";
import CustomerCare from "./components/CustomerCare/CustomerCare";
import Donation from "./components/Donation/Donation";
import Settings from "./components/Settings/Settings";
import Transactions from "./components/Transactions/Transactions";
import CardsPage from "./components/Cards/CardsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Bills" element={<Bills />} />
        <Route path="/CustomerCare" element={<CustomerCare />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Transactions" element={<Transactions />} />
        <Route path="/CardsPage" element={<CardsPage />} />
      </Routes>
    </>
  );
}

export default App;
