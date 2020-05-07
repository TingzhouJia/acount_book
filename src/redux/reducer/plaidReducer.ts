import { AppThunk } from '../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Transaction from 'redux/model/transaction'
import Balance from 'redux/model/balance'
import Account from 'redux/model/account'
import Holding from 'redux/model/holding'
import axios from 'axios'
import { testRoot, Endpoint } from 'api/plaidAPI'
import Identity from 'redux/model/identity'

interface plaidType {
    transactionList: Transaction[] | null,
    balanceList: Balance | null,
    accountList: Account[] | null,
    totalBalance: number,
    HoldingList: Holding[] | null,
    plaidLoading: boolean,
    IdentityList: Identity[]
    error: FetchError | null

}
type FetchError = {
    error: string
}
const initialState: plaidType = {
    transactionList: [],
    balanceList: null,
    accountList: [],
    totalBalance: 0,
    HoldingList: [],
    IdentityList: [],
    plaidLoading: false,
    error: null
}

const plaidSlice = createSlice({
    name: 'plaid',
    initialState,
    reducers: {
        fetchStart: startLoading,
        fetchTransitionListSuccess(state, { payload }: PayloadAction<Transaction[]>) {
            state.transactionList = payload;
            state.plaidLoading = false
        },
        fetchAccountListSuccess(state, { payload }: PayloadAction<Account[]>) {
            state.accountList = payload;
                state.plaidLoading = false
        },
        fetchBalanceListSuccess(state, { payload }: PayloadAction<Balance>) {
            state.balanceList = payload;
                state.plaidLoading = false
        },
        fetchHoldingListSuccess(state, { payload }: PayloadAction<Holding[]>) {
            state.HoldingList = payload;
                state.plaidLoading = false
        },
        fetchIdentityListSuccess(state, { payload }: PayloadAction<Identity[]>) {
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
    await axios.get(`${testRoot + Endpoint.TransactionsPath}`, { params: { date: limit } }).then((res) => {
        if (res.data.error != null) {
            dispatch(fetchFailed(res.data.error));
        } else {
            dispatch(fetchTransitionListSuccess(res.data.transactions))
        }

    })
}

export const fetchAccountList = (): AppThunk => async (dispatch) => {
    dispatch(fetchStart());
    await axios.get(`${testRoot + Endpoint.AccountsPath}`).then((res) => {
        if (res.data.error != null) {
            dispatch(fetchFailed(res.data.error));
        } else {
            dispatch(fetchAccountListSuccess(res.data.accounts))
        }

    })
}

export const fetchIdentityList = (): AppThunk => async (dispatch) => {
    dispatch(fetchStart());
    await axios.get(`${testRoot + Endpoint.IdentityPath}`).then((res) => {
        if (res.data.error != null) {
            dispatch(fetchFailed(res.data.error));
        } else {
            dispatch(fetchIdentityListSuccess(res.data.identity))
        }

    })
}

export const fetchBalanceList = (): AppThunk => async (dispatch) => {
    dispatch(fetchStart());
    await axios.get(`${testRoot + Endpoint.BalancePath}`).then((res) => {
        if (res.data.error != null) {
            dispatch(fetchFailed(res.data.error));
        } else {
            dispatch(fetchBalanceListSuccess(res.data.balance))
        }

    })
}

export const fetchHoldingList = (): AppThunk => async (dispatch) => {
    dispatch(fetchStart());
    await axios.get(`${testRoot + Endpoint.HoldingsPath}`).then((res) => {
        if (res.data.error != null) {
            dispatch(fetchFailed(res.data.error));
        } else {
            dispatch(fetchHoldingListSuccess(res.data.holdings))
        }

    })
}
export default plaidSlice.reducer


