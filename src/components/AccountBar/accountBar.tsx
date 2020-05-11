import React, { useEffect } from 'react'
import { Tabs } from 'antd';
import './accountBar.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { fetchAccountList } from 'redux/reducer/plaidReducer';
import Loading from 'components/loader/loading';
const renderTabs = (title: string) => {
    return (
        <div className="render_account_card">
            <span style={{ fontWeight: 700 }}>{title}</span>
            <span style={{ fontWeight: 300, fontSize: "0.4rem" }}>
                CURRENT RECORD:{" "}
            </span>
            <span style={{ textAlign: "center", fontWeight: 700, fontSize: "1rem" }}>
                24
        </span>

        </div>
    );
};
const AccountBar: React.FC = () => {

    const dispatch = useDispatch()
    const { plaidLoading, accountList } = useSelector((state: RootState) => state.plaid)
    useEffect(() => {
        if (!accountList) {
            dispatch(fetchAccountList())
        }

    }, [dispatch, accountList])
    return (
        <div className="account_page_body" style={{ padding: "1vw" }}>
            {plaidLoading ? <Loading /> : <>
                <Tabs
                    defaultActiveKey="1"
                    tabPosition="left"
                    type="card"
                >
                    <Tabs.TabPane tab={renderTabs("SUBSCRPTION")} key="1">
                        <div className="account_tab_wrap">

                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={renderTabs("SUBSCRPTION")} key="2">
                        <div className="account_tab_wrap">

                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={renderTabs("SUBSCRPTION")} key="3">
                        <div className="account_tab_wrap">

                        </div>
                    </Tabs.TabPane>
                </Tabs></>}
        </div>
    )
}

export default AccountBar
