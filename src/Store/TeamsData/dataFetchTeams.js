import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

require('dotenv').config()

const accessKey = process.env.REACT_APP_API_KEY;
const apiURL = "https://api.football-data.org/v2/";

const authAxios = axios.create({
    baseURL: apiURL,
    headers: {
        "X-Auth-Token": `${accessKey}`
    }
})

export const fetchTeamsData = createAsyncThunk(
    'footballTeamsData/fetchTeamsData',
    async (url) => {
        const { data } = await authAxios.get(url)
        return data
    }
)

const teamsDataSlice = createSlice({
    name: 'footballTeamsData',
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
        [fetchTeamsData.pending]: (state) => {
            state.loading = "pending"
        },
        [fetchTeamsData.fulfilled]: (state, { payload }) => {
            state.loading = "fullfilled"
            state.data = payload
        },
        [fetchTeamsData.rejected]: (state) => {
            state.loading = "rejected"
        }
    }
})


export const dataActions = teamsDataSlice.actions;
export default teamsDataSlice.reducer