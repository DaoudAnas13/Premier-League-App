import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { videosDataActions } from '../../Store/TeamsData/videosDataFetch'

import "./Highlights.css"

function HighlightsDisplay() {
    const gamesVideos = useSelector(state => state.videosDataFetch.data)
    console.log(gamesVideos)

    const premVideos = gamesVideos.filter(el => el.competition === "ENGLAND: Premier League")
    console.log(premVideos)

    const dispatch = useDispatch();
    const history = useHistory();
    const handleHistory = () => history.push('/');

    const handleReset = () => {
        dispatch(videosDataActions.resetAll())
    }

    const handleClick = () => {
        handleHistory();
        handleReset();
    }

    return (
        <div className="mainVideosContainer">
            <div style={{ display: "flex", padding: "2em", alignItems: "center" }}>
                <button onClick={() => handleClick()} className="homeBtnHigh">home</button>
                <h1 className="title">Wanna watch some top notch football ? Sit back and enjoy !</h1>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <img className="premLogoHigh" src="/2.png" style={{ width: "40%", padding: "1em 0 2em 0" }}></img>
            </div>

            <div
                className="videosContainer">


                {
                    premVideos.map((el) => (
                        <div style={{ width: "22%" }} className="videoItem">

                            <a target='_blank' href={el.matchviewUrl} style={{ textDecoration: "none", textAlign: "center", color: "white" }}>
                                <img style={{ width: "100%", paddingBottom: ".5em" }} src={el.thumbnail}></img>
                                <h3>{el.title}</h3>
                            </a>

                        </div>))
                }
            </div>
        </div>
    )
}

export default HighlightsDisplay
