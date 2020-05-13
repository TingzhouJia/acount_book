import thunk ,{ThunkDispatch}from "redux-thunk"
import configureMockStore from 'redux-mock-store'

import fetchMock from 'fetch-mock'
import {fetchTransactionList, fetchAccountList} from '../src/redux/reducer/plaidReducer'
import expect from 'expect'
import {AnyAction, CombinedState} from 'redux'
const middlewares = [thunk]

type DispatchExts = ThunkDispatch<CombinedState<{}>, any, AnyAction>;
const mockStore = configureMockStore<CombinedState<{}>,DispatchExts>(middlewares)
