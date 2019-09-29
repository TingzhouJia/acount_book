import {CHANGE_INCOME,CHANGE_OUTGOINGS,ADD_INFO,EDIT_INFO,DELETE_INFO,GET_INFO, DELETE_INCOME, DELETE_OUTGOINGS} from './actions/actions_type'
import {combineReducers} from 'redux'
const initFiance={
    income:0,outgoing:6000
}
function finances(state=initFiance,actions){
    switch (actions.type){
        case CHANGE_INCOME:
            let income=state.income+(actions.data)/1
            return {income}
        case CHANGE_OUTGOINGS:
            let outgoing=state.outgoing+(actions.data)/1
            return {outgoing}
        case DELETE_INCOME:
            return {income:state.income-(actions.data)/1}
        case DELETE_OUTGOINGS:
            
            return {outgoing:state.outgoing-(actions.data)/1}     
        default:
            return state    
    }
}
const Information=[{id:1,icon:'trip',Description:' take trip in Ottawa',price:2000,date:'2018-09-18',tags:['travel','outgoing']},
{id:2,icon:"food",Description:' dinner with friends',
price:4000,date:'2018-09-18',tags:['food','outgoing']}]
function details(state=Information,actions){
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
const reducers=combineReducers({Finance:finances,Details:details})
export default reducers