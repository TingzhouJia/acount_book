import React from 'react'


import './viewtab.css'

import BalanceBar from 'components/BalanceBar/balanceBar'
import PicList from 'components/pictureList/pictureList'



const ViewTabs =()=>{
     
      return (
        <div className="viewTab">
          <div className="topTab">
          <BalanceBar/>
         
          </div>
        
         <div  className="bottomTab"> 

        
           <PicList />
         </div>       
        </div>
        
      
      )
     
    }




export default ViewTabs
