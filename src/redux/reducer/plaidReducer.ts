import { AppThunk } from '../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Transaction from 'redux/model/transaction'
import Balance from 'redux/model/balance'
import Account from 'redux/model/account'
import Holding from 'redux/model/holding'
import axios from 'axios'
import { testRoot, Endpoint } from 'api/plaidAPI'
import Identity from 'redux/model/identity'

export interface plaidType {
    transactionList: Transaction| null,
    balanceList: Balance | null,
    accountList: Account | null,
    totalBalance: number,
    HoldingList: Holding | null,
    plaidLoading: boolean,
    IdentityList: Identity|null
    error: FetchError | null

}
export type FetchError = {
    error: string
}
const initialState: plaidType = {
    transactionList: null,
    balanceList: null,
    accountList: null,
    totalBalance: 0,
    HoldingList: null,
    IdentityList: null,
    plaidLoading: false,
    error: null
}

const plaidSlice = createSlice({
    name: 'plaid',
    initialState,
    reducers: {
        fetchStart: startLoading,
        fetchTransitionListSuccess(state, { payload }: PayloadAction<Transaction>) {
            state.transactionList = payload;
            state.plaidLoading = false
        },
        fetchAccountListSuccess(state, { payload }: PayloadAction<Account>) {
            state.accountList = payload;
                state.plaidLoading = false
        },
        fetchBalanceListSuccess(state, { payload }: PayloadAction<Balance>) {
            state.balanceList = payload;
                state.plaidLoading = false
        },
        fetchHoldingListSuccess(state, { payload }: PayloadAction<Holding>) {
            state.HoldingList = payload;
                state.plaidLoading = false
        },
        fetchIdentityListSuccess(state, { payload }: PayloadAction<Identity>) {
            state.IdentityList = payload;
                state.plaidLoading = false
        },
        fetchFailed(state, { payload }: PayloadAction<FetchError>) {
            state.error = payload
        }
    }
    }
)

const {
    fetchStart,
    fetchAccountListSuccess,
    fetchBalanceListSuccess,
    fetchHoldingListSuccess,
    fetchIdentityListSuccess,
    fetchTransitionListSuccess,
    fetchFailed
} = plaidSlice.actions

function startLoading(state: plaidType) {
    state.plaidLoading = true;
}


export const fetchTransactionList = (limit: number = 30): AppThunk => async (dispatch) => {
    dispatch(fetchStart());
    await axios.get(`${testRoot + Endpoint.TransactionsPath}`, { params: { date: limit },timeout:2000 }).then((res) => {
        if (res.data.error != null) {
            dispatch(fetchFailed(res.data.error));
        } else {
            dispatch(fetchTransitionListSuccess(res.data.transactions))
        }

    }).catch(error=>{dispatch(fetchFailed(error))})
}

export const fetchAccountList = (): AppThunk => async (dispatch) => {
    dispatch(fetchStart());
    await axios.get(`${testRoot + Endpoint.AccountsPath}`,{timeout:2000}).then((res) => {
        if (res.data.error != null) {
            dispatch(fetchFailed(res.data.error));
        } else {
            dispatch(fetchAccountListSuccess(res.data.accounts))
        }

    }).catch(error=>{dispatch(fetchFailed(error))})
}

export const fetchIdentityList = (): AppThunk => async (dispatch) => {
    dispatch(fetchStart());
    await axios.get(`${testRoot + Endpoint.IdentityPath}`,{timeout:2000}).then((res) => {
        if (res.data.error != null) {
            dispatch(fetchFailed(res.data.error));
        } else {
            dispatch(fetchIdentityListSuccess(res.data.identity))
        }

    }).catch(error=>{dispatch(fetchFailed(error))})
}

export const fetchBalanceList = (): AppThunk => async (dispatch) => {
    dispatch(fetchStart());
    await axios.get(`${testRoot + Endpoint.BalancePath}`,{timeout:2000}).then((res) => {
        if (res.data.error != null) {
            dispatch(fetchFailed(res.data.error));
        } else {
            dispatch(fetchBalanceListSuccess(res.data.balance))
        }

    }).catch(error=>{dispatch(fetchFailed(error))})
}

export const fetchHoldingList = (): AppThunk => async (dispatch) => {
    dispatch(fetchStart());
    await axios.get(`${testRoot + Endpoint.HoldingsPath}`,{timeout:2000}).then((res) => {
        if (res.data.error != null) {
            dispatch(fetchFailed(res.data.error));
        } else {
            dispatch(fetchHoldingListSuccess(res.data.holdings))
        }

    }).catch(error=>{dispatch(fetchFailed(error))})
}
export default plaidSlice.reducer


