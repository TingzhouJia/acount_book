import Utilities from "redux/model/utilities"
import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import { testRoot, Endpoint } from 'api/plaidAPI'
import {AppThunk} from '../store'
import axios from 'axios'
interface FinanceType {
    budget:number,
    outcome:number,
    utilities:Utilities[]
    financeLoading:boolean,
    error:FinanceError|null
}
const initialState:FinanceType={
    budget:10000,
    outcome:0,
    utilities:[],
    financeLoading:false,
    error:null
}
 type FinanceError={
    error:string
}


const financeReducer=createSlice({
    name:'finance',
    initialState,
    reducers:{
        fetchStart:startLoading,
        fetchUtilitiesSuccess(state,{payload}:PayloadAction<Utilities[]>){
            state.utilities=payload;
            state.financeLoading=false
        },
        addUtilitiesSuccess(state,{payload}:PayloadAction<Utilities>){
            state.utilities=[...state.utilities,payload]
            state.financeLoading=false
        },
        removeutilitiesSuccess(state,{payload}:PayloadAction<string>){
            state.utilities=state.utilities.filter((info)=>info.id!==payload)
            state.financeLoading=false
        },
        manipulationError:(state,{payload}:PayloadAction<FinanceError>)=>{
            state.financeLoading=false
            state.error=payload
        },
        setBudget:(state,{payload}:PayloadAction<number>)=>{
            state.budget=payload
            state.financeLoading=false
        },
        setOutcome:(state,{payload}:PayloadAction<number>)=>{
            
            state.outcome=payload;
            state.financeLoading=false
        },
        setPrivacy:(state,{payload}:PayloadAction<{id:string,privacy:boolean}>)=>{
            //state.utilities
        }
    }
})
const {fetchStart,fetchUtilitiesSuccess,removeutilitiesSuccess,manipulationError,setBudget,setOutcome,addUtilitiesSuccess}=financeReducer.actions
function startLoading(state: FinanceType) {
    state.financeLoading = true;
}
export const fetchUtilities=():AppThunk=>async (dispatch)=>{
    dispatch(fetchStart())
    await axios.get(`${testRoot + Endpoint.UtilitiesPath}`,{timeout:2000}).then((res)=>{
        if (res.data.error != null) {
            dispatch(manipulationError(res.data.error));
        } else {

            dispatch(fetchUtilitiesSuccess(res.data.data.utilities))
            //calOutcomes(res.data.data.utilities)
            var num:number=0;
            res.data.data.utilities.map((each:Utilities)=>{
                num+=each.amount
            })
            dispatch(setOutcome(Math.ceil(num)))
        }
    }).catch(error=>{dispatch(manipulationError(error))})
}

const calOutcomes=(source:Utilities[]):AppThunk=>(dispatch)=>{
   
}

export const addUtilities=(content:Utilities):AppThunk=>async (dispatch)=>{
    dispatch(fetchStart());
    
     setTimeout(()=>{
        dispatch(addUtilitiesSuccess(content))
    },1000)
}

export const removeUtilities=(target:string):AppThunk=>async (dispatch)=>{
    dispatch(fetchStart())
    setTimeout(()=>{
        dispatch(removeutilitiesSuccess(target))
    },1000)
}
export const setPrivacyUp=(target:string,priv:boolean):AppThunk=>async (dispatch)=>{

}

export const setBudgetUp=(num:number):AppThunk=>async (dispatch)=>{
    dispatch(fetchStart())
    setTimeout(()=>{
        setBudget(num)
    },1000)
}

export default financeReducer.reducer

