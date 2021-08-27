import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchVideosData = createAsyncThunk(
    'footballVideosData/fetchVideosData',
    async () => {
        const request = await axios.get("https://www.scorebat.com/video-api/v3/")
        return request.data.response
    }
)

const videosDataSlice = createSlice({
    name: 'footballvideosData',
    initialState: {
        loading: null,
        data: null,
    },
    reducers: {
        resetAll: (state) => {
            state.data = null;
            state.loading = null;
        }
    },
    extraReducers: {
        [fetchVideosData.pending]: (state) => {
            state.loading = "pending"
        },
        [fetchVideosData.fulfilled]: (state, { payload }) => {
            state.loading = "fullfilled"
            state.data = payload
        },
        [fetchVideosData.rejected]: (state) => {
            state.loading = "rejected"
        }
    }
})

export const videosDataActions = videosDataSlice.actions;
export default videosDataSlice.reducer;