import {CHANGE_INCOME,CHANGE_OUTGOINGS,DELETE_OUTGOINGS, DELETE_INCOME,ADD_INFO,DELETE_INFO,GET_INFO,EDIT_INFO} from "./actions_type";
import reducers from '../reducer'

export const changeIncome=(num)=>({type:CHANGE_INCOME,data:num})

export const changeOutgoings=(num)=>({type:CHANGE_OUTGOINGS,data:num})

export const deleteIncome=(num)=>({type:DELETE_INCOME,data:num})

export const deleteOutgoings=(num)=>({type:DELETE_OUTGOINGS,data:num})

export const add_info=(info)=>({type:ADD_INFO,data:info})

export const delete_info=(index)=>({type:DELETE_INFO,data:index})

export const edit_info=(info)=>({type:EDIT_INFO,data:info})

const get_info=(infos)=>({type:GET_INFO,data:infos})

export const getFrom=()=>{
    return dispatch=>{
        setTimeout(()=>{
            const infomation=[
                {id:1,icon:'trip',Description:' take trip in Ottawa',price:2000,date:'2018-09-18',tags:['travel','outgoing']},
        {id:2,icon:"food",Description:' dinner with friends',
        price:4000,date:'2018-09-18',tags:['food','outgoing']}
            ]
            //分发同步action
            dispatch(get_info(reducers))
        },1000)
    }
}
    
