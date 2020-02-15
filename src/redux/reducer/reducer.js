import {combineReducers} from 'redux'
import {finances,details} from './Finance_reducer'
import userReducer from './user_reducer'
export default combineReducers({
    Finance:finances,
    Details:details,
    User:userReducer
})
