import { MasterCard, VisaCard } from "../Cards/Card";
import Topbar from "../Topbar/Topbar";
import AccountCard from "../AccountCard/AccountCard";
import TransactionTable from "../TransationTable/TransactionTable";
import Footbar from "../Footbar/Footbar";
import "./Dashboard.css";

const analyticCard = [
  {
    text: "Income",
    num: "654",
  },
  {
    text: "Income",
    num: "654",
  },
  {
    text: "Income",
    num: "654",
  },
  {
    text: "Income",
    num: "654",
  },
];
const Dashboard = () => {
  return (
    <>
      <div className="container">
        <Topbar />
        <AccountCard />
        <MasterCard front="front" />
        <TransactionTable />
        <Footbar />
      </div>
    </>
  );
};

export default Dashboard;
