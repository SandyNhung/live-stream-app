import { combineReducers } from 'redux'
import GoogleAuth from './GoogleAuth'
import { reducer  as FormReducer} from 'redux-form'
import StreamReducer from './StreamReducer';

export default combineReducers ({
    GoogleAuth: GoogleAuth,
    form: FormReducer,
    stream: StreamReducer
})
