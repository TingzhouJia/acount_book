import React, { useState, useReducer, useCallback, useEffect } from 'react'
import { Form, Input, Button, DatePicker, message } from 'antd'
import { outgoingList, incomeList } from '../Utils/utils'
import { Icons } from '../../iconRes/icons';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './information.css'
import ChoiceBar from './choiceBar';


// const init:ReducerState={Description:'',price:0,date:'',tags:[''],icon:'',type:''}
// type ReducerState={
//   Description:string,
//   price:number,
//   date:String,
//   tags:[String],
//   icon:String,
//   type:String

// }
// type recuerAction=|{type:'discription',data:string}|{type:'price',data:number}|{type:'date',data:String}|{type:'type',data:String}|
// {type:'icon',data:String}|{type:'reload',data:null}
// function reducer(state:ReducerState,action:recuerAction):ReducerState{
//   switch(action.type){
//     case 'discription':return {...state,Description:action.data};
//     case 'price':return {...state,price:action.data};
//     case 'date':return {...state,date:action.data};
//     case 'type':return {...state,type:action.data};
//     case 'icon':return {...state,icon:action.data};
//     case 'reload':return {...init};
//   }
// }
interface Choice {
  choice: number
}


const Information = (props: Choice) => {


  const AccountForm = () => {
    return (
      <div className="account_form">

      </div>
    )
  }

  const UtilityForm = () => {
    return (
      <Form form={form} className="utilities_form">
        <div>
        <span>Utilities Information</span>
        <Form.Item label="Utilities Official Name" name="offical_name" rules={[
          {
            required: true,
            message: 'Please input the offical name!',
          }]}>
          <Input />
        </Form.Item>
        <Form.Item name="remark_name" label="Utilities Remark Name">
          <Input />
        </Form.Item>
        </div>
       <div>
       <span>User Information</span>
        <Form.Item name="user_name" label="Utilities Account Username">
          <Input />
        </Form.Item>

       </div>
      </Form>
    )
  }
  //   const [state,innerdispatch]=useReducer(reducer,init)
  //   const [change,setChange]=useState(false)
  //   const [clean,setClean]=useState<string>('')
  const [form] = Form.useForm();

  //   const dispatch=useDispatch()

  //   const getInfo=useCallback((event:React.FormEvent<HTMLInputElement>):void=>{
  //     setChange(false)
  //     const description=event.currentTarget.value
  //     innerdispatch({type:'discription',data:description})
  // },[state.Description])

  //   const handleNumberChange=useCallback((event)=>{
  //       setChange(false)
  //       const price=(event.target.value)/1
  //       innerdispatch({type:'price',data:price})
  //   },[state.price])
  //   const getDate=useCallback((date,dateString)=>{
  //     innerdispatch({type:'date',data:dateString})
  //  },[state.date])



  //   const set=useCallback((key)=>{
  //     innerdispatch({type:'type',data:key})
  //     setChange(true)
  //     setClean('')
  // },[state.type])

  //   const getType=useCallback((event)=>{
  //     const type=event.target.value

  //    innerdispatch({type:'icon',data:type})   
  // },[state.icon])


  return (
    <div className="normal_info">
      <UtilityForm/>
    </div>)

}

{/* // Information=connect(null,{add_info,changeIncome,changeOutgoings})(Information) */ }
export default Information