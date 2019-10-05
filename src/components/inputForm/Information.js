import React from 'react'
import {Form,Input,Button,DatePicker,Radio,Tabs} from 'antd'
import {Link,Redirect} from 'react-router-dom'
import {outgoingList,incomeList}from '../../components/Utils/utils'
import {Icons} from '../../iconRes/icons';
import {connect} from 'react-redux'
import {withRouter}from 'react-router-dom'
import {add_info,edit_info,changeIncome,changeOutgoings} from '../../redux/actions/actions'
const { TabPane } = Tabs;
class Information extends React.Component{
    state={
      Description:'',price:0,date:'',tags:[],icon:''
    }
    getInfo=(event)=>{
        const Description=event.target.value
        this.setState({Description})
    }
    handleNumberChange=(event)=>{
        const price=(event.target.value)/1
        this.setState({price})
    }
    getDate=(date,dateString)=>{
        this.setState({date:dateString})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const info=this.state
        if(info.tags.length!=2){
            //说明没有选择，就添加默认值
            const {tags}=this.state
            tags.push('Outgoings')
            this.setState({tags})
          
        }
        if(this.state.tags.indexOf('Outgoings') !=-1){
          this.props.changeOutgoings(this.state.price)
        }else{
          this.props.changeIncome(this.state.price)
        }
        this.props.add_info(info);
        this.setState({Description:'',price:0,date:'',tags:[],icon:''})
        this.props.history.push('/viewTable')
    }
    set=(key)=>{
        const {tags}=this.state
        tags.push(key)
        this.setState({tags})
    }
    
    getType=(event)=>{
        const type=event.target.value
        this.setState({icon:type})
        const {tags}=this.state
        tags.push(type)
        this.setState({tags})
        
    }
    render(){
        
        return (
        
    <Form layout="inline" onSubmit={this.handleSubmit}>
    <Tabs defaultActiveKey="2" onChange={this.set}>
    <TabPane
      tab={
        <span>
          Outgoings
        </span>
      }
      key="Outgoings"
      
      
    >
    <Radio.Group onChange={this.getType} >
        {outgoingList.map((item,index)=>{
                return <Radio key={index} value={item.title}><Icons type={item.icon} style={{ fontSize: '30px', color: 'black' }}/>{item.title}</Radio>
                })}
      </Radio.Group>
    </TabPane>
    <TabPane
      tab={
        <span>
          Incomes
        </span>
      }
      key="Incomes"
    >
      <Radio.Group onChange={this.getType} defaultValue="a">
        {incomeList.map((item,index)=>{
                
                return <Radio key={index} value={item.title} style={{marginLeft:"10px"}}><Icons type={item.icon} style={{ fontSize: '30px', color: 'black' }}/>{item.title}</Radio>
            
                })}
      </Radio.Group>
    </TabPane>
  </Tabs>
      <Form.Item label="Description">
        <Input  onChange={this.getInfo}/>
      </Form.Item>
      <Form.Item label="Price">
          <Input
            type="text"
            size="large"
            onChange={this.handleNumberChange}
            style={{ width: '65%', marginRight: '3%' }}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
         {(<DatePicker onChange={this.getDate}/>)}
        </Form.Item>
        
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
        
    </Form>
        )
    }
}

Information=connect(null,{add_info,changeIncome,changeOutgoings})(Information)
export default withRouter(Information)