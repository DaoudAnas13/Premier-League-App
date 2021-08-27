import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useHistory } from 'react-router'
import { dataActions } from '../../Store/TeamsData/dataFetchTeams';
import TeamItem from './TeamItem';

import "./Teams.css"

function TeamDisplay() {
    const teams = useSelector(state => state.teamsDataFetch.data.teams)
    console.log(teams)

    const premData = ["ARS", "AST", "CHE", "EVE", "LIV", "MCI", "MUN", "NEW", "NOR",
        "TOT", "WOL", "BUR", "LEI", "SOU", "LEE",
        "CRY", "BHA", "BRE", "WHU", "WAT"]

    const filtredTeam = teams.filter(el => premData.includes(el.tla))
    console.log(filtredTeam)

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
        <div className="mainTeams">
            <button className="homeBtnTeam" onClick={() => handleClick()}>home</button>

            <div className="teamsContainer">
                <img className="premLogo" src="/2.png" style={{ width: "40%", paddingTop: "6em" }}></img>
                {
                    filtredTeam.map((el) => (
                        <TeamItem
                            crestUrl={el.crestUrl}
                            name={el.name}
                            founded={el.founded}
                            colors={el.clubColors}
                            venue={el.venue} />
                    ))
                }
            </div>
        </div>
    )
}

export default TeamDisplay
