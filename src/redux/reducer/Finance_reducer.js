
import {CHANGE_INCOME,CHANGE_OUTGOINGS,ADD_INFO,EDIT_INFO,DELETE_INFO,GET_INFO, DELETE_INCOME, DELETE_OUTGOINGS,CHANGE_BUDGET} from '../actions/actions_type'

const initFiance={
    income:0,outgoing:6000,budget:0
}
export function finances(state=initFiance,actions){
    // 不要直接修改state，最好通过object。assign去复制一份然后再修改
    switch (actions.type){
        case CHANGE_INCOME:         
            return Object.assign({},state,{income:state.income+(actions.data)/1})
        case CHANGE_OUTGOINGS:
            return Object.assign({},state,{outgoing:state.outgoing+(actions.data)/1})
        case DELETE_INCOME:
            return Object.assign({},state,{income:state.income-(actions.data)/1})
        case DELETE_OUTGOINGS: 
            return Object.assign({},state,{outgoing:state.outgoing-(actions.data)/1})
        case CHANGE_BUDGET:
           return Object.assign({},state,{budget:(actions.data)/1})
        default:
            return state    
    }
}
const Information=[{id:1,icon:'trip',Description:' take trip in Ottawa',price:2000,date:'2018-09-18',tags:['travel','Outgoings']},
{id:2,icon:"food",Description:' dinner with friends',
price:4000,date:'2018-09-18',tags:['food','Outgoings']}]
export function details(state=Information,actions){
    switch (actions.type){
        case ADD_INFO:
            return [actions.data,...state]
        case DELETE_INFO:
            return state.filter((info,index)=>index!==actions.data);    
        case GET_INFO:
            return actions.data
        default :
        return state
    }
}

