import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTeamsData } from '../../Store/TeamsData/dataFetchTeams'
import TeamDisplay from './TeamDisplay';
import { CircularProgress } from '@material-ui/core';


function Teams() {
    const dispatch = useDispatch();

    const urlAPI = "teams";

    useEffect(() => {
        dispatch(fetchTeamsData(urlAPI))
    }, [])

    const loading = useSelector(state => state.teamsDataFetch.loading)
    console.log(`PREM TEAMS ------ ${loading}`)

    return (
        <div>
            < div >
                {loading === "pending" && <div style={{
                    height: "100vh", display: "flex", justifyContent: "center"
                    , alignItems: "center"
                }}> <CircularProgress /></div>}
                {loading === "fullfilled" && <React.Fragment> <TeamDisplay /> </React.Fragment>}
            </div >
        </div>
    )
}

export default Teams
