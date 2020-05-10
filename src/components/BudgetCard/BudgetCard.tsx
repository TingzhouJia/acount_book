import React, { useEffect } from 'react'
import './bugetCard.css'
import CircleCard from '../Charts/circle'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { Spin } from 'antd'
import { fetchUtilities } from 'redux/reducer/financeReducer'
const BudgetCard: React.FC = () => {
    const dispatch=useDispatch()
    const {outcome,budget,financeLoading}=useSelector((state:RootState)=>state.finances)

    useEffect(() => {
            if(!outcome||!budget){
                dispatch(fetchUtilities())
            }
            

    }, [dispatch])
    return (
        <div className="budgetCard">
            <div className="budget_card_title">
                <span>Budget</span>
                <div className="budget_card_content">
                    <span>${budget-outcome}</span>
                    <span>{}</span>
                </div>
            </div>
           {financeLoading?<div><Spin/></div>:<CircleCard outcome={outcome} budget={budget}/>}
        </div>
    )
}
export default BudgetCard;


