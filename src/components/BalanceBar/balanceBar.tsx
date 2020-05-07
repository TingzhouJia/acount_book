import React from 'react'
import {Button} from 'antd'
import './balanceBar.css'
const BalanceBar:React.FC=()=>{


    return(
      <div className="balance_bar">
        <div className="balanceTop">
        <div className="balance">
          <span className="balance_title">BALANCE</span>
          <div className="balance_content">
            <span style={{fontWeight:700,fontSize:"larger"}}>$27,900.00</span>
            <span style={{color:"#21bf73"}}>+386.00</span>
          </div>
        </div>
        <div className="deposit">
          <span className="deposit_title">DEPOSIT</span>
          <span className="desposit_content">$1,231.00</span>
        </div>
        <div className="balance_buttons">
            <Button type="primary">RESET</Button>
            <Button type="primary" >ADD </Button>
        </div>
        </div>

      </div>
    )
  }

  export default BalanceBar