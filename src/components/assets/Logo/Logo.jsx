import { AccountBalanceWallet } from '@mui/icons-material';
import React from 'react'

const Logo = (props) => {
  return (
    <>
      {" "}
      <AccountBalanceWallet
        sx={{
          border: "1px solid #ffffef",
          padding: "2vw",
          fontSize: "10vw",
          borderRadius: "50%",
          marginBottom: "3vh",
        }}
      />
    </>
  );
}

export default Logo