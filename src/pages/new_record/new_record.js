import React from "react";
import Information from "../../components/inputForm/Information";
import { Drawer, Tabs } from "antd";
import {} from '@ant-design/icons'
import "./newrecord.css";

const renderTabs = title => {
  return (
    <div className="render_card">
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

//添加新记录的组件
const NewRecord = () => {
  return (
    <div className="new_record" style={{ padding: "1vw" }}>
      <span
        style={{
          marginLeft: "2vw",
          fontWeight: 800,
          fontSize: "2rem",
          paddingBottom: "5vw"
        }}
      >
        NEW PAYMENT
      </span>
      <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        type="card"
        style={{ marginLeft: "2vw" }}
      >
        <Tabs.TabPane tab={renderTabs("SUBSCRPTION")} key="1">
          <div className="tab_wrap">

          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab={renderTabs("CARDS")} key="2">
        <div className="tab_wrap">

        </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab={renderTabs("NORMAL")} key="3">
        <div className="tab_wrap">
        <Information/>
        </div>
          
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default NewRecord;
