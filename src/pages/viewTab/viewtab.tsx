import React from 'react'


import './viewtab.css'

import BalanceBar from 'components/BalanceBar/balanceBar'
import PicList from 'components/pictureList/pictureList'
import FirstTable from 'components/firstTable/firstTable'



const ViewTabs =()=>{
     
      return (
        <div className="viewTab">
          <div className="topTab">
          <BalanceBar/>
         
          </div>
        
         <div  className="bottomTab"> 

            <div className="bottom_left"><FirstTable/></div>
            <div className="bottom_right">kkk</div>
           {/* <PicList /> */}
         </div>       
        </div>
        
      
      )
     
    }




export default ViewTabs
