import { configureStore } from "@reduxjs/toolkit";
import teamsDataFetchReducer from "./TeamsData/dataFetchTeams"
import videosDataFetchReducer from "./TeamsData/videosDataFetch";

const Store = configureStore({
    reducer: {
        teamsDataFetch: teamsDataFetchReducer,
        videosDataFetch: videosDataFetchReducer,
    }
})

export default Store