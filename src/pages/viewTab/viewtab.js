import React from 'react'
import PicList from '../../components/pictureList/pictureList'
import {useSelector} from 'react-redux'
import './viewtab.css'
import SearchBar from '../../components/SearchBar/SearchBar'



const ViewTabs =()=>{
   
      const info=useSelector(state=>state.Details)
      
      
      return (
        <div className="viewTab">
          <SearchBar></SearchBar>
        
          <PicList Infos={info}/>
       
        </div>
        
      
      )
     
    }




export default ViewTabs
