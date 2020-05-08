import React from 'react'
import PicList from '../../components/pictureList/pictureList'
import {useSelector} from 'react-redux'
import {Card,Badge, Button} from 'antd'
import './viewtab.css'
import { RootState } from 'redux/store'
import BalanceBar from 'components/BalanceBar/balanceBar'



const ViewTabs =()=>{
     
      return (
        <div className="viewTab">
          <div className="topTab">
          <BalanceBar/>
         
          </div>
        
         <div  className="bottomTab"> 

        
           <PicList Infos={info}/>
         </div>       
        </div>
        
      
      )
     
    }




export default ViewTabs
