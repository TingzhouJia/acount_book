import reducer, {plaidType, fetchAccountList} from '../src/redux/reducer/plaidReducer'



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




