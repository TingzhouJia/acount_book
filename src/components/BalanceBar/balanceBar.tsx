import React, { useEffect, Suspense, useState, useCallback } from 'react'
import {Button, Spin} from 'antd'
import './balanceBar.css'
import BalanceBarChart from 'components/Charts/balanceBarChart'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBalanceList } from 'redux/reducer/plaidReducer'
import { RootState } from 'redux/store'
import Balance from 'redux/model/balance'
import { AccountEach } from 'redux/model/account'
const BalanceBar:React.FC=()=>{
    const dispatch=useDispatch()
    const {plaidLoading,balanceList} =useSelector((state:RootState)=>state.plaid);
    const [balancesList,setBalanceLists]=useState<Balance|null>(null);
   const [totalBalacne, setTotalBalance] = useState<number|null>(0);
    const getTotal=useCallback((lists)=>{
        let num:number=0;
        lists?.accounts?.map((each:AccountEach)=>{
            num+=each.balances.current;
           });
           
           setTotalBalance(num)
           console.log(num)
    },[totalBalacne])
    useEffect(() => {
        
       // Calbalance();
        if(!balanceList){
            dispatch(fetchBalanceList());
            
        }
       
      

     

       setBalanceLists(balanceList);
       getTotal(balanceList)
       
        console.log(1)
    }, [dispatch,totalBalacne,balancesList,balanceList])
    return(
      <Suspense fallback={<Spin/>}>
        <div className="balance_bar">
        <div className="balanceTop">
            <span className="balance_total">Total Balance:</span>
            <span className="balance_total_count">${totalBalacne}</span>
        </div>
        <BalanceBarChart data={balanceList?.accounts?balanceList?.accounts:[]}/>
      </div>
      </Suspense>
    )
  }

  export default BalanceBar