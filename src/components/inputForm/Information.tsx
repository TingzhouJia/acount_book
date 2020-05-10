import React,{useState,useReducer, useCallback,useEffect} from 'react'
import {Form,Input,Button,DatePicker,message} from 'antd'
import {outgoingList,incomeList}from '../Utils/utils'
import {Icons} from '../../iconRes/icons';
import {useDispatch} from 'react-redux'
import {useHistory}from 'react-router-dom'
import './information.css'


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
const Information:React.FC=()=>{
    const [state,innerdispatch]=useReducer(reducer,init)
    const [change,setChange]=useState(false)
    const [clean,setClean]=useState<string>('')
    const [form] = Form.useForm();
    const history=useHistory()
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


    // const handleSubmit=(e)=>{
    //     e.preventDefault()
    //     if(!state.icon){
    //       message.info('Oops, no icon chosen')
    //       return;
    //     }
    //     if(state.type===''){
    //         state.type="Outgoings"
    //     }
    //    state.tags.push(state.type,state.icon)
       
    //     if(state.tags.indexOf('Outgoings') !=-1){
    //       dispatch({type:CHANGE_OUTGOINGS,data:state.price})
    //       // this.props.changeOutgoings(this.state.price)
    //     }else{
    //       dispatch({type:CHANGE_INCOME,data:state.price})
    //     }
    //     dispatch({type:ADD_INFO,data:state})
        
    //     history.push('/home/viewTable')
    // }
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
            
            <Form layout="inline" className="info_form">
            <h1>NORMAL RECORD</h1>
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
     
 </Form>
 

     <div className="normal_choice">
     {outgoingList.map((item,index)=>{
              return <div key={index} ><Icons type={item.icon} style={{ fontSize: '30px', color: 'black' }}/>{item.title}</div>
              })}
   
 
      {incomeList.map((item,index)=>{
              
              return <div key={index} style={{marginLeft:"10px"}}><Icons type={item.icon} style={{ fontSize: '30px', color: 'black' }}/>{item.title}</div>
          
              })}
     </div>
  
          </div>
          
        )
    
}

// Information=connect(null,{add_info,changeIncome,changeOutgoings})(Information)
export default Information