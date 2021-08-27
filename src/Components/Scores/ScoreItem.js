import React from 'react'

import "./Scores.css"

function ScoreItem(props) {
    return (
        <tr>
            <td style={{ textTransform: "uppercase", fontWeight: "700" }} >{props.homeTeamName}</td>
            <td style={{ fontWeight: "700", color: "#340040", fontSize: "1.2em" }}>{props.scoreHomeTeam} - {props.scoreAwayTeam}</td>
            <td style={{ textAlign: "right", textTransform: "uppercase", fontWeight: "700" }} >{props.awayTeamName}</td>
        </tr>
    )
}

ScoreItem.defaultProps = {
    scoreHomeTeam: "?",
    scoreAwayTeam: "?"
}

export default ScoreItem
