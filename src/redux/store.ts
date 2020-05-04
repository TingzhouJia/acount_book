import {createStore,applyMiddleware,Action} from "redux";
import reducers from './reducer/reducer'
import thunk ,{ThunkAction} from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
const store= createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export type RootState = ReturnType<typeof reducers>
export default store