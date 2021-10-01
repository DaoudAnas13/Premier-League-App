import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useHistory } from 'react-router'
import { dataActions } from '../../Store/TeamsData/dataFetchTeams';
import TeamItem from './TeamItem';

import { useEffect , useState } from 'react';

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
