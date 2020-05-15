import React,{useState,useReducer, useCallback,useEffect} from 'react'
import {Form,Input,Button,DatePicker,message} from 'antd'
import {outgoingList,incomeList}from '../Utils/utils'
import {Icons} from '../../iconRes/icons';
import {useDispatch} from 'react-redux'
import {useHistory}from 'react-router-dom'
import './information.css'
import ChoiceBar from './choiceBar';


const init:ReducerState={Description:'',price:0,date:'',tags:[''],icon:'',type:''}
type ReducerState={
  Description:string,
  price:number,
  date:String,
  tags:[String],
  icon:String,
  type:String

}
type recuerAction=|{type:'discription',data:string}|{type:'price',data:number}|{type:'date',data:String}|{type:'type',data:String}|
{type:'icon',data:String}|{type:'reload',data:null}
function reducer(state:ReducerState,action:recuerAction):ReducerState{
  switch(action.type){
    case 'discription':return {...state,Description:action.data};
    case 'price':return {...state,price:action.data};
    case 'date':return {...state,date:action.data};
    case 'type':return {...state,type:action.data};
    case 'icon':return {...state,icon:action.data};
    case 'reload':return {...init};
  }
}

const infoList=[{content:'Add new bank account for you',hint:'you need authorize plaid client to access your bank account'},
  {content:'Add utilities to your account',hint:'this utility statement can be setup as either private or public'},
  {content:'Add user in your group Or create a group',hint:'you can invite user in your group or create a group '}]
const Information:React.FC=()=>{
    const [state,innerdispatch]=useReducer(reducer,init)
    const [change,setChange]=useState(false)
    const [clean,setClean]=useState<string>('')
    const [form] = Form.useForm();

    const dispatch=useDispatch()

    const getInfo=useCallback((event:React.FormEvent<HTMLInputElement>):void=>{
      setChange(false)
      const description=event.currentTarget.value
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



    const set=useCallback((key)=>{
      innerdispatch({type:'type',data:key})
      setChange(true)
      setClean('')
  },[state.type])
    
    const getType=useCallback((event)=>{
      const type=event.target.value
     
     innerdispatch({type:'icon',data:type})   
  },[state.icon])
   
        
        return (
          <div className="normal_info">
            <div className="record_select_choice">
              <ChoiceBar content={infoList}/>
            </div>
            {/* <Form layout="inline" className="info_form">
            <h1>Comfirm Your Record</h1>
   <Form.Item label="Description">
     <Input  onChange={getInfo} value={change?clean:state.Description} />
   </Form.Item>
   <Form.Item label="Price">
   
       <Input
         prefix="$" suffix="CAD"
         type="text"
         value={change?clean:state.price}
         onChange={handleNumberChange}
        
       />
     </Form.Item>
     <Form.Item label="DatePicker">
      <DatePicker onChange={getDate}/>
     </Form.Item>
     
     <Button type="primary" htmlType="submit">
         Submit
     </Button>
     
 </Form> */}
 

     {/* <div className="normal_choice">
     {outgoingList.map((item,index)=>{
              return <div key={index} ><Icons type={item.icon} style={{ fontSize: '30px', color: 'black' }}/>{item.title}</div>
              })}
   
 
      {incomeList.map((item,index)=>{
              
              return <div key={index} style={{marginLeft:"10px"}}><Icons type={item.icon} style={{ fontSize: '30px', color: 'black' }}/>{item.title}</div>
          
              })}
     </div>
  
          </div> */}
          
          </div>)
    
}

{/* // Information=connect(null,{add_info,changeIncome,changeOutgoings})(Information) */}
export default Information