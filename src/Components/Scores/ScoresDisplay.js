import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import "./Scores.css"

import { useHistory } from 'react-router'
import { dataActions } from '../../Store/TeamsData/dataFetchTeams';
import ScoreItem from './ScoreItem';

import { useEffect, useState } from 'react';


function ScoresDisplay() {

    const dispatch = useDispatch();

    const history = useHistory();
    const handleHistory = () => history.push('/');

    const handleReset = () => {
        dispatch(dataActions.resetAll())
    }

    const handleClick = () => {
        handleHistory();
        handleReset();
    }

    const [locationKeys, setLocationKeys] = useState([])

    useEffect(() => {
        return history.listen(location => {
            if (history.action === 'PUSH') {
                setLocationKeys([location.key])
            }
            if (history.action === 'POP') {
                if (locationKeys[1] === location.key) {
                    setLocationKeys(([_, ...keys]) => keys)
                } else {
                    handleClick()
                    setLocationKeys((keys) => [location.key, ...keys])
                }
            }
        })
    }, [locationKeys,])

    const leagueMatches = useSelector(state => state.teamsDataFetch.data.matches)
    console.log(leagueMatches)


    const finishedGames = leagueMatches.filter(el => el.status === "FINISHED")
    console.log(finishedGames)

    const upcomingFixtures = leagueMatches.filter(el => {
        return (el.status === "SCHEDULED" && el.matchday < 10)
    })



    return (
        <div>
            <div style={{ backgroundColor: "#EAF205" }} className="mainScoresContainer">
                <button className="homeBtnStan" onClick={() => handleClick()}>home</button>
                <img src="/2.png" style={{ width: "40%", paddingBottom: "2em" }}></img>
                <div className="scoresTable" >
                    <table>

                        {

                            finishedGames.map((el, index) => {
                                return (
                                    <>
                                        <div className="matchday" style={{ width: "100%", textAlign: "center", right: "-10em", position: "relative" }}>
                                            {(finishedGames[index - 1 > 0 ? index - 1 : 0].matchday != el.matchday || index == 0) && <h2>matchday {el.matchday}</h2>}
                                        </div>

                                        <ScoreItem
                                            scoreHomeTeam={el.score.fullTime.homeTeam}
                                            scoreAwayTeam={el.score.fullTime.awayTeam}
                                            homeTeamName={el.homeTeam.name}
                                            awayTeamName={el.awayTeam.name}
                                        >
                                        </ScoreItem>



                                    </>
                                )

                            })


                        }
                    </table>


                </div>


                <div className="scoresTable" >
                    <table>

                        {

                            upcomingFixtures.map((el, index) => {
                                return (
                                    <>
                                        <div className="matchday" style={{ width: "100%", textAlign: "center", right: "-10em", position: "relative" }}>
                                            {(upcomingFixtures[index - 1 > 0 ? index - 1 : 0].matchday != el.matchday || index == 0) && <h2>matchday {el.matchday}</h2>}
                                        </div>

                                        <ScoreItem
                                            homeTeamName={el.homeTeam.name}
                                            awayTeamName={el.awayTeam.name}
                                        >
                                        </ScoreItem>



                                    </>
                                )

                            })


                        }
                    </table>


                </div>
            </div >
        </div>


    )
}

export default ScoresDisplay

