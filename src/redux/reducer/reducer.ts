import {combineReducers} from 'redux'
import finances from './financeReducer'
import user from './user_reducer'
import plaid from './plaidReducer'
export default combineReducers({
    user,
    finances,
    plaid
})
