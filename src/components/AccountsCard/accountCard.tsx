import React from 'react'
import './accountCard.css'
import {  PlusSquareFilled } from '@ant-design/icons'
const  AccountCard:React.FC=()=>{
    return (
        <div className="accountCard">
            <div className="account_card_top">
                <span className="account_card_title">Accounts</span>
                <PlusSquareFilled style={{fontSize:'1.5rem',color:"#22eaaa"}}  />
            </div>
            <div>

            </div>
        </div>
    )
}

export default AccountCard
