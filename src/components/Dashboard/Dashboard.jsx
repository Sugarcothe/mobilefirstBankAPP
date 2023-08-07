import { VisaCard } from "../Cards/Card";
import Topbar from "../Topbar/Topbar";
import AccountCard from "../AccountCard/AccountCard";
import TransactionTable from "../TransationTable/TransactionTable";
import Footbar from "../Footbar/Footbar";

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
        <VisaCard />
        <TransactionTable/>
        <Footbar/>
      </div>
    </>
  );
};

export default Dashboard;
