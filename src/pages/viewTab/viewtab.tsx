import React from 'react'


import './viewtab.css'

import BalanceBar from 'components/BalanceBar/balanceBar'
import FirstTable from 'components/firstTable/firstTable'
import BudgetCard from 'components/BudgetCard/BudgetCard'
import AccountCard from 'components/AccountsCard/accountCard'
import HoldingCard from 'components/HoldingCard/holdingCard'



const ViewTabs =()=>{
     
      return (
        <div className="viewTab">
          <div className="topTab">
          <BalanceBar/>
          <HoldingCard/>
          <BudgetCard/>

          </div>
        
         <div  className="bottomTab"> 
            <div className="bottom_left"><FirstTable/></div>
            <div className="bottom_right"><AccountCard/></div>
         </div>       
        </div>
        
      
      )
     
    }




export default ViewTabs
