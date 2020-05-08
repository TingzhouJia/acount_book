import React, { useEffect, Suspense, useState, useCallback } from 'react'
import {Button, Spin} from 'antd'
import './balanceBar.css'
import BalanceBarChart from 'components/Charts/balanceBarChart'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBalanceList } from 'redux/reducer/plaidReducer'
import { RootState } from 'redux/store'

import { AccountEach } from 'redux/model/account'
const BalanceBar:React.FC=()=>{
    const dispatch=useDispatch()
    const {plaidLoading,balanceList} =useSelector((state:RootState)=>state.plaid);
   const [totalBalacne, setTotalBalance] = useState<number|null>(0);
    const getTotal=useCallback(()=>{
        let num:number=0;
        balanceList?.accounts?.map((each:AccountEach)=>{
            num+=each.balances.current;
           });
           setTotalBalance(num)
          
    },[balanceList])

    useEffect(() => {
        
       if(!balanceList){
        dispatch(fetchBalanceList());
       }
        if(balanceList){
            console.log(1)
            getTotal()
        }
       
       //console.log(totalBalacne)
      
    }, [balanceList])
    return(
        <div className="balance_bar">
        <div className="balanceTop">
            <span className="balance_total">Total Balance:</span>
            <span className="balance_total_count">${totalBalacne}</span>
        </div>
        <div  >{plaidLoading?<Spin/>:<BalanceBarChart data={balanceList?.accounts?balanceList?.accounts:[]}/>}</div>
      </div>
    )
  }

  export default BalanceBar