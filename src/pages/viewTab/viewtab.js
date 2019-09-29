import React from 'react'
import { Tabs ,Icon} from 'antd';
import {LIST_VIEW,GRAPH_VIEW} from '../../components/Utils/utils'
import PicList from '../../components/pictureList/pictureList'
import {connect} from 'react-redux'
const { TabPane } = Tabs;

class ViewTabs extends React.Component{
  
    render(){
      const {info}=this.props
        return <Tabs  type="card" style={{height:"100%"}} size={"large"}>
        <TabPane tab={<span><Icon type='unorder-list'/>List Model</span>} key="list">
          <PicList Infos={info}/>
        </TabPane>
        <TabPane tab={<span><Icon type='dashboard'/>Graph Model</span>} key="graph">
          Content of Tab Pane 2
        </TabPane>
        
      </Tabs>
    }
}

const mapStateProps=state=>({
  info:state.Details
})
export default ViewTabs=connect(mapStateProps)(ViewTabs)
