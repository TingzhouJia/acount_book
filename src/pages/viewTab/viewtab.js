import React from 'react'
import PicList from '../../components/pictureList/pictureList'
import {useSelector} from 'react-redux'
import {Card,Badge} from 'antd'
import './viewtab.css'


const ItemList=[
  1,2,4,5
]
const BalanceBar=()=>{
  return(
    <div className="balance_bar">
      <div className="balance">
        <span className="balance_title">BALANCE</span>
        <div className="balance_content">
          <span style={{fontWeight:"700",fontSize:"larger"}}>$27,900.00</span>
          <span style={{color:"#21bf73"}}>+386.00</span>
        </div>
      </div>
      <div className="deposit">
        <span className="deposit_title">DEPOSIT</span>
        <span className="desposit_content">$1,231.00</span>
      </div>
      <div className="balance_buttons">
          <button className="bal_button">RESET</button>
          <button className="bal_button">ADD </button>
      </div>
    </div>
  )
}
const ViewTabs =()=>{
   
      const info=useSelector(state=>state.Details)
      
      
      return (
        <div className="viewTab">
         
          <div className="cards" >
            {ItemList.map(item=>(
              
               <div className="card" >
                 <Badge className="card_badge" count={10}/>
     
                <div className="content">
                    <span className="content_title">Salary</span>
                    <span>$1000.00</span>
                </div>  
                  
              
                </div>
              
            ))}
          
           <div className="card_add">
     
           </div>
          </div>
          <BalanceBar/>
         <div > <PicList Infos={info}/></div>
        
       
        </div>
        
      
      )
     
    }




export default ViewTabs
