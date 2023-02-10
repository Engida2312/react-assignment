import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dashboardService from "./dashboardService";

const initialState = {
    isLoading: false,
    isSuccess:false,
    isError:false,
    allListings: [],
    fevorites: "",
    message: ''
}

// all listings
export const showAllListings = createAsyncThunk(
    'dashboard/listings',
    async(_, thunkAPI)=>{
        try {
            return await dashboardService.showAllListings()
        } catch (error) {
            const message = (error.response && 
                error.response.data &&
                error.response.data.message) || 
                error.message || 
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)


const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        deleteListing: (state, action) => {
            state.allListings = state.allListings.filter(
                (item) => item.id !== action.payload.id
            );
        },
        updateListing: (state, action) => {
            state.allListings.map((item) => {
              if (item.id === action.payload.id) {
                    item.name = action.payload.name;
                    item.email = action.payload.email;
                    item.phone = action.payload.phone;
                    item.website = action.payload.website;
                }
            });
        },
        addFevorites: (state, action)=>{
            state.allListings.map((item)=>{
                if (item.id === action.payload.id) {
                    item.fevorites = action.payload.fevorites;
                }
            })
        }
    },
    extraReducers: (builder)=>{
        builder
            .addCase(showAllListings.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(showAllListings.fulfilled, (state, action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.allListings = action.payload                
            })
            .addCase(showAllListings.rejected, (state, action)=>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
           
    }
});

export const { deleteListing, updateListing, addFevorites } = dashboardSlice.actions;

export default dashboardSlice.reducer