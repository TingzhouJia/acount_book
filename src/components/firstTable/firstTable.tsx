
import React, { useEffect, useState, useCallback } from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { Skeleton, Drawer, Avatar, Tag, Row } from 'antd'
import { TransactionEach } from 'redux/model/transaction'
import './firstTable.css'
import { fetchTransactionList } from 'redux/reducer/plaidReducer'
const FirstTable: React.FC = () => {
    const dispatch = useDispatch()
    const [showDrawer, setDrawer] = useState<boolean | undefined>(false)
    const [target, settarget] = useState<TransactionEach|undefined>(undefined)
    const { transactionList, plaidLoading } = useSelector((state: RootState) => state.plaid)
    const ColorList = ['volcano', 'orange', 'green', 'blue','magenta','lime','#f50'];
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
                        transactionList?.transactions.slice(0, 6).map((item: TransactionEach,index:number) => {
                            return (
                                <div className="each_item_first_table" onClick={()=>getDrawer(index)} key={`each_item_${index}`}>
                                    <Avatar shape="circle" style={{background:ColorList[ColorList.length%index]}}>{item.name.slice(0,4)}</Avatar>
                                    <div className="each_item_name">
                                        <span className="each_item_high">{item.name}</span>
                                        <span className="each_item_dark">{item.payment_channel}</span>
                                    </div>
                                    <div className="each_item_name">
                                        <span className="each_item_high">{item.transaction_type}</span>
                                        <div className="each_item_category">
                                        {item.category.map((each:string,index1:number)=>{
                                            return <Tag key={`each_item_key_${index}_${index1}`} color={ColorList[ColorList.length%index]}>{each}</Tag>
                                        })}
                                        </div>
                                    </div>
                                    <div className="each_item_price each_item_name" style={{alignItems:"flex-end"}}>
                                        <span className="each_item_high">${item.amount}</span>
                                        <Tag  style={{width:"50px"}} color={item.pending ? "error": "success" } >{item.pending ? 'Pending' : 'Paid'}</Tag>
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
                <Skeleton paragraph={{rows:2}}  loading={plaidLoading} active></Skeleton>
            </div>
        </div>
    )
}

export default FirstTable
