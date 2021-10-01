import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import StandingsTeamDetails from './StandingsTeamDetails'
import "./StandingsTeamDetails.css"

import { useHistory } from 'react-router'
import { dataActions } from '../../Store/TeamsData/dataFetchTeams';
import { useState, useEffect } from 'react'

function StandingsDisplay() {

    const standingsTable = useSelector(state => state.teamsDataFetch.data.standings[0].table)
    console.log(standingsTable)

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


    return (
        <div>

            <div className="mainContainer">
                <button onClick={() => handleClick()} className="homeBtn">Home</button>

                <img src="/2.png" style={{ width: "40%", paddingBottom: "3em" }}></img>
                <table>

                    <tr>
                        <th>Pos</th>
                        <th></th>
                        <th>PLD</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GD</th>
                        <th>Pts</th>
                    </tr>

                    {
                        standingsTable.map((el) => (
                            <StandingsTeamDetails
                                position={el.position}
                                teamLogo={el.team.crestUrl}
                                teamName={el.team.name}
                                playedGames={el.playedGames}
                                won={el.won}
                                draw={el.draw}
                                lost={el.lost}
                                goalsFor={el.goalsFor}
                                goalsAgainst={el.goalsAgainst}
                                points={el.points}
                            />
                        ))
                    }
                </table>
            </div>
        </div>
    )
}

export default StandingsDisplay
