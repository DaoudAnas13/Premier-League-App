import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StandingsDisplay from './StandingsDisplay';
import { fetchTeamsData } from '../../Store/TeamsData/dataFetchTeams'
import { CircularProgress } from '@material-ui/core';


function Standings() {
    const dispatch = useDispatch();

    const urlAPI = "competitions/2021/standings";

    useEffect(() => {
        dispatch(fetchTeamsData(urlAPI))
    }, [])

    const loading = useSelector(state => state.teamsDataFetch.loading)
    console.log(`PREM STANDINGS ------ ${loading}`)

    return (
        <div>
            < div >
                {loading === "pending" && <div style={{
                    height: "100vh", display: "flex", justifyContent: "center"
                    , alignItems: "center"
                }}> <CircularProgress /></div>}
                {loading === "fullfilled" && <React.Fragment> <StandingsDisplay /> </React.Fragment>}
            </div >
        </div>
    )
}

export default Standings
