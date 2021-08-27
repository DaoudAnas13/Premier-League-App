import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import StandingsTeamDetails from './StandingsTeamDetails'
import "./StandingsTeamDetails.css"

import { useHistory } from 'react-router'
import { dataActions } from '../../Store/TeamsData/dataFetchTeams';

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
