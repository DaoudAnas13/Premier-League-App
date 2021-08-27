import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideosData } from '../../Store/TeamsData/videosDataFetch'
import HighlightsDisplay from './HighlightsDisplay'
import { CircularProgress } from '@material-ui/core'


function Highlights() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchVideosData())
    }, [])

    const loading = useSelector(state => state.videosDataFetch.loading)
    console.log(`PREM STANDINGS ------ ${loading}`)


    return (
        <div>
            < div >
                {loading === "pending" && <div style={{
                    height: "100vh", display: "flex", justifyContent: "center"
                    , alignItems: "center"
                }}> <CircularProgress /></div>}
                {loading === "fullfilled" && <React.Fragment> <HighlightsDisplay /> </React.Fragment>}
            </div >
        </div>
    )
}

export default Highlights
