import React,{useState,useReducer, useCallback,useEffect} from 'react'
import {Form,Input,Button,DatePicker,Radio,Tabs,message} from 'antd'
import {outgoingList,incomeList}from '../../components/Utils/utils'
import {Icons} from '../../iconRes/icons';
import {useDispatch} from 'react-redux'
import {useHistory}from 'react-router-dom'
import './information.css'
import {ADD_INFO,CHANGE_INCOME,CHANGE_OUTGOINGS} from '../../redux/actions/actions_type'

const { TabPane } = Tabs;
const init={Description:'',price:0,date:'',tags:[],icon:'',type:''}
const reducer=(state,action)=>{
  switch(action.type){
    case 'discription':return {...state,Description:action.data};
    case 'price':return {...state,price:action.data};
    case 'date':return {...state,date:action.data};
    case 'type':return {...state,type:action.data};
    case 'icon':return {...state,icon:action.data};
    case 'reload':return {...init};
  }
}
const Information=()=>{
    const [state,innerdispatch]=useReducer(reducer,init)
    const [change,setChange]=useState(false)
    const [clean,setClean]=useState('')
    const history=useHistory()
    const dispatch=useDispatch()
    const getInfo=useCallback((event)=>{
      setChange(false)
      const description=event.target.value
      innerdispatch({type:'discription',data:description})
  },[state.Description])
    const handleNumberChange=useCallback((event)=>{
        setChange(false)
        const price=(event.target.value)/1
        innerdispatch({type:'price',data:price})
    },[state.price])
    const getDate=useCallback((date,dateString)=>{
      innerdispatch({type:'date',data:dateString})
   },[state.date])
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!state.icon){
          message.info('Oops, no icon chosen')
          return;
        }
        if(state.type===''){
            //说明没有选择，就添加默认值
          
            // tags.push('Outgoings')
            // this.setState({tags})
            state.type="Outgoings"
            //settags([...Tags,"Outgoings"])
        }
       state.tags=[state.type,state.icon]
       
        if(state.tags.indexOf('Outgoings') !=-1){
          dispatch({type:CHANGE_OUTGOINGS,data:state.price})
          // this.props.changeOutgoings(this.state.price)
        }else{
          dispatch({type:CHANGE_INCOME,data:state.price})
        }
        dispatch({type:ADD_INFO,data:state})
        
        history.push('/home/viewTable')
    }
    const set=useCallback((key)=>{
      // const {tags}=this.state
      // tags.push(key)
      // this.setState({tags})
    
      innerdispatch({type:'type',data:key})
      setChange(true)
      setClean('')
  },[state.type])
    
    const getType=useCallback((event)=>{
      const type=event.target.value
      // this.setState({icon:type})
      // const {tags}=this.state
      // tags.push(type)
      // this.setState({tags})
     innerdispatch({type:'icon',data:type})   
  },[state.icon])
   
        
        return (
        
    <Form layout="inline" onSubmit={handleSubmit} className="info_form">
    <Tabs defaultActiveKey="2" onChange={set} >
    <TabPane
      tab={
        <span>
          Outgoings
        </span>
      }
      key="Outgoings"
      
      
    >
    <Radio.Group onChange={getType} >
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
      <Radio.Group onChange={getType} defaultValue="a">
        {incomeList.map((item,index)=>{
                
                return <Radio key={index} value={item.title} style={{marginLeft:"10px"}}><Icons type={item.icon} style={{ fontSize: '30px', color: 'black' }}/>{item.title}</Radio>
            
                })}
      </Radio.Group>
    </TabPane>
  </Tabs>
      <Form.Item label="Description">
        <Input  onChange={getInfo} value={change?clean:state.Description} />
      </Form.Item>
      <Form.Item label="Price">
      
          <Input
            prefix="$" suffix="CAD"
            type="text"
            value={change?clean:state.price}
            onChange={handleNumberChange}
            style={{ width: '10vw', marginRight: '3%',}}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
         <DatePicker onChange={getDate}/>
        </Form.Item>
        
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
        
    </Form>
        )
    
}

// Information=connect(null,{add_info,changeIncome,changeOutgoings})(Information)
export default Information