import React from 'react'
import { Tabs ,Icon,Select, Divider } from 'antd';
import {LIST_VIEW,GRAPH_VIEW} from '../../components/Utils/utils'
import PicList from '../../components/pictureList/pictureList'
import {connect} from 'react-redux'
const { TabPane} = Tabs;
const {Option } = Select;

class ViewTabs extends React.Component{
    handleChange=()=>{
      
    }
    render(){
      const menu = (
        <div>
      <Select defaultValue={new Date().toString().substr(4,4)} style={{ width: 120 }} onChange={this.handleChange}>
      <Option value="1">Jan</Option>
      <Option value="2">Feb</Option>
      <Option value="3" >Mar</Option>
      <Option value="4">Apr</Option>
      <Option value="5">May</Option>
      <Option value="6">Jun</Option>
      <Option value="7" >Jul</Option>
      <Option value="8">Aug</Option>
      <Option value="9">Sep</Option>
      <Option value="10">Oct</Option>
      <Option value="11" >Nov</Option>
      <Option value="12">Dec</Option>
    </Select>
        </div>
      )
      const {info}=this.props
      return (
        <div>
          {menu}
          <Tabs  type="card" style={{height:"100%"}} size={"large"}>
        <TabPane tab={<span><Icon type='unorder-list'/>List Model</span>} key="list">
          <PicList Infos={info}/>
        </TabPane>
        <TabPane tab={<span><Icon type='dashboard'/>Graph Model</span>} key="graph">
          Content of Tab Pane 2
        </TabPane>
        
      </Tabs>
        </div>
        
      
      )
     
    }
}

const mapStateProps=state=>({
  info:state.Details
})
export default ViewTabs=connect(mapStateProps)(ViewTabs)
