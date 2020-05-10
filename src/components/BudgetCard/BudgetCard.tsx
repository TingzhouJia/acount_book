import React, { useEffect } from 'react'
import './bugetCard.css'
import CircleCard from '../Charts/circle'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { Spin, Tooltip } from 'antd'
import { fetchUtilities } from 'redux/reducer/financeReducer'
import { PlusCircleOutlined } from '@ant-design/icons'
const BudgetCard: React.FC = () => {
    const dispatch = useDispatch()
    const { outcome, budget, financeLoading } = useSelector((state: RootState) => state.finances)

    useEffect(() => {
        if (!outcome || !budget) {
            dispatch(fetchUtilities())
        }


    }, [dispatch])
    return (
        <div className="budgetCard">
            <div className="budget_card_title">
                <span>Budget</span>
                <div className="budget_card_content">
                    <Tooltip title="Go to budget page" placement='bottom'>
                        <div className="budget_card_content_right"><span>${budget - outcome}</span><PlusCircleOutlined /></div>
                    </Tooltip>
                    <span className="budget_card_content_bottom">- ${outcome}</span>
                </div>
            </div>
          {financeLoading ? <Spin />: <CircleCard outcome={outcome} budget={budget} />}
            
        </div>
    )
}
export default BudgetCard;


