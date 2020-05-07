import {combineReducers} from 'redux'
import {finances,details} from './Finance_reducer'
import user from './user_reducer'
import plaid from './plaidReducer'
export default combineReducers({
    user,
    finances,
    details,
    plaid
})
