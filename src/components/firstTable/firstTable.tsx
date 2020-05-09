
import React, { useEffect } from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { Skeleton } from 'antd'
import { TransactionEach } from 'redux/model/transaction'
import './firstTable.css'
import { fetchTransactionList } from 'redux/reducer/plaidReducer'
const FirstTable: React.FC = () => {
    const dispatch=useDispatch()
    const { transactionList, plaidLoading } = useSelector((state: RootState) => state.plaid)
    useEffect(() => {
        if(!transactionList){
            dispatch(fetchTransactionList())
          }
    })
    return (
        <div className="first_table">
            <div className="first_table_header">
                <span className="first_table_title">Recent Transactions</span>
                <ArrowRightOutlined />
            </div>
            <div className="first_table_body">
                <Skeleton loading={plaidLoading} active>
                    {
                        transactionList?.transactions.slice(0, 5).map((item: TransactionEach)=>{
                            return (
                                <div className="each_item">
                                <div className="each_item_name">
                                    <span className="each_item_high">{item.name}</span>
                                    <span className="each_item_dark">{item.payment_channel}</span>
                                </div>
                                <div className="each_item_name">
                                <span className="each_item_high">{item.name}</span>
                                    <span className="each_item_dark">{item.payment_channel}</span>
                                </div>
                                <div className="each_item_price each_item_name">
                                <span className="each_item_high">{item.amount}</span>
                                    <span className={`each_item_dark `} style={item.pending?{color:"red"}:{color:"green"}}>{item.pending?'Pending':'Paid'}</span>
                                </div>
                            </div>
                            )
                        })
                    }
                </Skeleton>
            </div>
        </div>
    )
}

export default FirstTable
