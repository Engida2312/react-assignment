import {configureStore} from '@reduxjs/toolkit'
import dashboardSlice from '../Features/dashboardSlice'

export const store = configureStore({
    reducer: {
        dashboard: dashboardSlice,
    }
})