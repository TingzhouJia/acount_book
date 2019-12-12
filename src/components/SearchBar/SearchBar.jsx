import React from 'react'
import {Select,Input} from 'antd'
import './search.css'
const { Search } = Input;
const {Option} = Select;
function SearchBar(){
    const menu2=(<div className="year_picker">
    < Select defaultValue={new Date().getFullYear()} style={{ width: 120 }} >
      <Option value="2020">2020</Option>
      <Option value="2019">2019</Option>
      <Option value="2018" >2018</Option>
    </Select>
    </div>)
    const menu1 = (
        <div className="month_picker">
      <Select defaultValue={new Date().toString().substr(4,4)} style={{ width: 120 }} >
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
      const search=()=>{

      }
    return <div className="searchbar">
        {menu2}
        {menu1}
        <Search className="searchButton"
      placeholder="search record"
      enterButton="Search"
      size="large"
      onSearch={search}
    />
    </div>

}
export default SearchBar