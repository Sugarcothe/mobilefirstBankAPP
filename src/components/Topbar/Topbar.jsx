import { List, AccountBalanceWallet, Person } from '@mui/icons-material';
import React from 'react'
import './Topbar.css'

const Topbar = () => {
  return (
    <>
      <div className="topBar">
        <List sx={{ color: "#ffffef" }} />
        <AccountBalanceWallet
          sx={{
            border: "1px solid #ffffef",
            padding: "2vw",
            fontSize: "7vw",
            borderRadius: "50%",
            color: "#ffffef",
          }}
        />
        <Person
          sx={{
            border: "1px solid #ffffef",
            padding: "1vw",
            fontSize: "5vw",
            borderRadius: "50%",
            color: "#ffffef",
          }}
        />
      </div>
    </>
  );
}

export default Topbar