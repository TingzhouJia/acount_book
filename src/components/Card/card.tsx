import React,{Suspense} from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { Badge } from 'antd'
import './card.css'
const AccountCard: React.FC=()=>{

    
    return <div className="cards" >
    {/* {ItemList.map(item=>(
       <div className="card" >
         <Badge className="card_badge" count={10}/>
        <div className="content">
            <span className="content_title">Salary</span>
            <span>$1000.00</span>
        </div>                      
        </div>  
    ))}           */}
   <div className="card_add">     
   </div>
  </div>
}