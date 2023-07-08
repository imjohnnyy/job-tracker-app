import {configureStore} from '@reduxjs/toolkit'
import applicationsReducer from './applicationsReducer'

export default configureStore({
    reducer: {
        //Here we will be adding reducers
        applicationsReducer: applicationsReducer
    },
})