import React from 'react'
import { Tabs ,Icon,Select, Divider } from 'antd';
import {LIST_VIEW,GRAPH_VIEW} from '../../components/Utils/utils'
import PicList from '../../components/pictureList/pictureList'
import {connect} from 'react-redux'
import './viewtab.css'
import SearchBar from '../../components/SearchBar/SearchBar'
const { TabPane} = Tabs;


class ViewTabs extends React.Component{
    handleChange=()=>{
      
    }
    render(){
      
      const {info}=this.props
      return (
        <div className="viewTab">
          <SearchBar></SearchBar>
        
          <PicList Infos={info}/>
       
        </div>
        
      
      )
     
    }
}

const mapStateProps=state=>({
  info:state.Details
})
export default ViewTabs=connect(mapStateProps)(ViewTabs)
