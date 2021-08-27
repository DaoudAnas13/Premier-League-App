import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTeamsData } from '../../Store/TeamsData/dataFetchTeams'
import ScoresDisplay from './ScoresDisplay';

import { CircularProgress } from '@material-ui/core';

function Scores() {
    const dispatch = useDispatch();

    const urlAPI = "competitions/2021/matches";

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
                {loading === "fullfilled" && <React.Fragment> <ScoresDisplay /> </React.Fragment>}
            </div >
        </div>
    )
}

export default Scores
