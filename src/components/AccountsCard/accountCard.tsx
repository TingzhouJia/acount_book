import React, { useEffect, useState } from 'react'
import './accountCard.css'
import { PlusSquareFilled, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { Skeleton, Tooltip, Avatar } from 'antd'
import { AccountEach } from 'redux/model/account'
import { fetchAccountList } from 'redux/reducer/plaidReducer'
const AccountCard: React.FC = () => {
    const dispatch=useDispatch()
    const { accountList, plaidLoading } = useSelector((state: RootState) => state.plaid)
    const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
    useEffect(() => {
        if(!accountList){
            dispatch(fetchAccountList())
        }
       
    }, [dispatch])
    return (
        <div className="accountCard">
            <div className="account_card_top">
                <span className="account_card_title">Accounts</span>
                <Tooltip title="Go to account page" style={{fontSize:"0.6rem"}} placement="topLeft">
                <PlusSquareFilled style={{ fontSize: '1.5rem', color: "#22eaaa" }} />
                </Tooltip>
            </div>
            <div className="accout_card_body">
                <Skeleton loading={plaidLoading} active>
                    {
                        accountList?.accounts.slice(0,5)?.map((item: AccountEach,index:number) => {
                            return (
                                <div className="each_account">
                                    <div className="each_account_row">      
                                    <Avatar shape="circle" style={{background:ColorList[ColorList.length%index]}}>{item.official_name.slice(0,5)}</Avatar>
                                    <div className="each_account_col" style={{paddingLeft:"5px"}}>
                                        <span className="each_col_high">{item.name}</span>
                                        <span className="each-col_dark">type:{item.type}</span>
                                    </div>
                                    </div>
                                    
                                    
                                    <div className="each_account_col2">
                                        <span className="each_col_high" style={{color:"#21bf73"}} ><ArrowUpOutlined style={{fontWeight:"bold",fontSize:'1rem'}} />${item.balances.limit ? item.balances.limit : item.balances.available}</span>
                                        <span className="each-col_dark"><ArrowDownOutlined />current:<span style={{color:"red"}}>{item.balances.current}</span></span>
                                    </div>
                                </div>
                            )
                        })

                    }
                </Skeleton>
                <Skeleton loading={plaidLoading} active />
            </div>
        </div>
    )
}

export default AccountCard
