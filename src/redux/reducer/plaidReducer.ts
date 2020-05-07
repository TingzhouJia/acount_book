import {AppThunk} from '../store'
import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import Transaction from 'redux/model/transaction'
import Balance from 'redux/model/balance'
import Account from 'redux/model/account'
import Holding from 'redux/model/holding'
import axios from 'axios'

interface plaidType{
    transactionList:Transaction[]|null,
    balanceList:Balance[]|null,
    accountList:Account[]|null,
    totalBalance:number,
    HoldingList:Holding[]|null,
    plaidLoading:boolean,
    error:FetchError|null
    
}
type FetchError={
    error:string
}
const initialState:plaidType={
    transactionList:[],
    balanceList:[],
    accountList:[],
    totalBalance:0,
    HoldingList:[],
    plaidLoading:false,
    error:null
}

const plaidSlice=createSlice({
    name:'plaid',
    initialState,
    reducers:{
        fetchStart:startLoading,
        fetchTransitionListSuccess(state,{payload}:PayloadAction<Transaction[]>){
            state.transactionList=payload,
            state.plaidLoading=false
        },
        fetchAccountListSuccess(state,{payload}:PayloadAction<Account[]>){
            state.accountList=payload,
            state.plaidLoading=false
        },
        fetchBalanceListSuccess(state,{payload}:PayloadAction<Balance[]>){
            state.balanceList=payload,
            state.plaidLoading=false
        },
        fetchHoldingList(state,{payload}:PayloadAction<Holding[]>){
            state.HoldingList=payload,
            state.plaidLoading=false
        },
        fetchFailed(state,{payload}:PayloadAction<FetchError>){
            state.error=payload
        }
    }
}    
)

const {
    fetchStart,
    fetchAccountListSuccess,
    fetchBalanceListSuccess,
    fetchHoldingList,
    fetchTransitionListSuccess,
    fetchFailed
}=plaidSlice.actions

function startLoading(state:plaidType){
    state.plaidLoading=true;
  }


export const fetchAccountList=():AppThunk=>async(dispatch)=>{
    dispatch(fetchStart())
}


