import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import { baseUrl } from '../Config/baseurl'

export const getAlbumdataAction = createAsyncThunk(
    'alubum/get',
    async(payload,{dispatch,getState,rejectWithValue})=>{
        try {
            let data = await fetch(baseUrl)
            const {feed} = await data.json()
            return feed
        } catch (error) {
            if (error?.response) {
                return rejectWithValue(error?.response?.data);
              } else {
                return rejectWithValue(error.message);
              }
        }
    }
)


const appSlice = createSlice({
    name : 'appsilce',
    initialState : {appdata:undefined,loading:false,appErr:undefined},
    reducers:{},
    extraReducers : builder=>{
        builder.addCase(getAlbumdataAction.pending ,(state)=>{
            state.loading = true ;
        }),
        builder.addCase(getAlbumdataAction.fulfilled,(state,action)=>{
            state.loading = false ;
            state.appdata = action?.payload ;
            state.appErr = undefined ;
        })
        builder.addCase(getAlbumdataAction.rejected,(state,action)=>{
            state.loading = false ;
            state.appdata = undefined ;
            state.appErr = action?.payload ;
        })
    }
})


export default appSlice.reducer