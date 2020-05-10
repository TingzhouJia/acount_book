import React, { useEffect } from 'react'
import './holdingCard.css'
import { PlusSquareFilled } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { Spin } from 'antd'
import { fetchHoldingList } from 'redux/reducer/plaidReducer'
const HoldingCard: React.FC = () => {
    const dispatch = useDispatch()
    const { plaidLoading, HoldingList } = useSelector((state: RootState) => state.plaid)
    useEffect(() => {
        if(!HoldingList){
            dispatch(fetchHoldingList())
        }
       
    }, [dispatch,HoldingList])
    return (
        <div className="holding_card">
            <div className="hold_card_title">
                <span>You have {plaidLoading?'no':HoldingList?.holdings?.length} holdings</span>
                <PlusSquareFilled style={{ color: '#dddddd', fontSize: '1.5rem' }} />
            </div>
            <div className="hold_card_body">
                {plaidLoading ? <Spin /> : <div></div>}
            </div>
            <div className="hold_card_footer">
                <span className="hold_card_footer_title">Investments</span>
                <span>${}</span>
            </div>
        </div>
    )
}
export default HoldingCard