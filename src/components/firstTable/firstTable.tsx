
import React, { useEffect, useState, useCallback } from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { Skeleton, Drawer } from 'antd'
import { TransactionEach } from 'redux/model/transaction'
import './firstTable.css'
import { fetchTransactionList } from 'redux/reducer/plaidReducer'
const FirstTable: React.FC = () => {
    const dispatch = useDispatch()
    const [showDrawer, setDrawer] = useState<boolean | undefined>(false)
    const [target, settarget] = useState<TransactionEach|undefined>(undefined)
    const { transactionList, plaidLoading } = useSelector((state: RootState) => state.plaid)
    useEffect(() => {
        if (!transactionList) {
            dispatch(fetchTransactionList())
        }
       
    },[dispatch,transactionList])
    const getDrawer=(e:number)=>{
      
        setDrawer(!showDrawer)
        settarget(transactionList?.transactions[e])
    
    }
    return (
        <div className="first_table">
            <div className="first_table_header">
                <span className="first_table_title">Recent Transactions</span>
                <ArrowRightOutlined />
            </div>
            <div className="first_table_body">
                <Skeleton loading={plaidLoading} active>
                    {
                        transactionList?.transactions.slice(0, 5).map((item: TransactionEach,index:number) => {
                            return (
                                <div className="each_item" onClick={()=>getDrawer(index)} key={`each_item_${index}`}>
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
                                        <span className={`each_item_dark `} style={item.pending ? { color: "red" } : { color: "green" }}>{item.pending ? 'Pending' : 'Paid'}</span>
                                    </div>

                                </div>
                            )
                        })
                    }
                    <Drawer
                        title={target?.name}
                        placement="right"
                        closable={false}
                        onClose={() => setDrawer(!showDrawer)}
                        visible={showDrawer}
                        getContainer={false}
                        style={{ position: 'absolute' }}
                    >
                       <div>
                           
                       </div>
                    </Drawer>
                </Skeleton>
                <Skeleton loading={plaidLoading} active></Skeleton>
            </div>
        </div>
    )
}

export default FirstTable
