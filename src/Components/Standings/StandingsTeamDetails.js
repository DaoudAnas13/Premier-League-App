import React from 'react'
import "./StandingsTeamDetails.css";

function StandingsTeamDetails(props) {
    return (
        <tr class="spaceUnder">
            <td style={{ fontWeight: "700" }}>{props.position}</td>
            <td style={{
                display: "flex", alignItems: "center", gap: "1em"
                , textTransform: "uppercase", fontWeight: "700"
            }} ><img src={props.teamLogo} style={{ width: "2em" }} ></img>
                {props.teamName}</td>
            <td>{props.playedGames}</td>
            <td>{props.won}</td>
            <td>{props.draw}</td>
            <td>{props.lost}</td>
            <td>{props.goalsFor}:{props.goalsAgainst}</td>
            <td style={{ fontWeight: "700" }} >{props.points}</td>
        </tr>
    )
}

export default StandingsTeamDetails

