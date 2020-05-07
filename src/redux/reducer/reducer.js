import {combineReducers} from 'redux'
import {finances,details} from './Finance_reducer'
import user from './user_reducer'
export default combineReducers({
    Finance:finances,
    Details:details,
    User:user
})
