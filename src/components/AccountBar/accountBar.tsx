import React, { useEffect, useState } from 'react'
import { Tabs, Tag } from 'antd';
import './accountBar.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { fetchAccountList } from 'redux/reducer/plaidReducer';
import Loading from 'components/loader/loading';
import { AccountEach } from 'redux/model/account';
const ColorList = ['#de6262, #ffb88c', '#bdc3c7,#2c3e50', '#ffafbd,#ffc3a0', '#cc2b5e, #753a88', '#dd5e89,#f7bb97', '#eecda3,#ef629f', '#000428 ,#004e92',
    '#ddd6f3 ,#faaca8', '#7b4397,#dc2430', '#4568dc ,#b06ab3'
]

const AccountBar: React.FC = () => {
    const [activeTab, setactiveTab] = useState<string>("0")
    const dispatch = useDispatch()
    const { plaidLoading, accountList } = useSelector((state: RootState) => state.plaid)
    useEffect(() => {
        if (!accountList) {
            dispatch(fetchAccountList())
        }

    }, [dispatch, accountList])
    const renderTabs = (item: AccountEach, index: number) => {
        return (
            <div onClick={()=>setactiveTab(`${index}`)} className="render_account_card" style={{ background: `linear-gradient(to right,${ColorList[index % ColorList.length]})` }}>
                <span style={{ fontWeight: 700,display:'flex',justifyContent:"flex-start" }}><Tag style={{borderRadius:"5px"}} color='error'>{item?.balances.iso_currency_code}</Tag> {item.balances.available ? item.balances.available : item.balances.current}</span>
                <span style={{display:'flex',justifyContent:"flex-start"}}>{item.type}</span>
                <div className="render_card_bottom">
                    <span>.... {item?.mask}</span>
                    <span>{item?.name}</span>
                </div>
    
            </div>
        );
    };

    return (
        <div className="account_page_body" style={{ padding: "1vw" }}>
            {plaidLoading ? <Loading /> :
                <Tabs

                    activeKey={activeTab}
                    tabPosition="left"
                    size="large"
                    style={{ height: "85vh" }}
                >
                    {

                        accountList?.accounts?.map((item: AccountEach, index: number) => (
                            <Tabs.TabPane tab={renderTabs(item, index)} key={index.toString()} >
                                <div className="account_tab_wrap">
                        <span>{item.official_name}</span>
                                </div>
                            </Tabs.TabPane>

                        ))


                    }


                </Tabs>}
        </div>
    )
}

export default AccountBar
