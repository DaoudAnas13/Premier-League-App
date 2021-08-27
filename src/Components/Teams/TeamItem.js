import React from 'react'

function TeamItem(props) {
    return (
        <div>
            <div className="teamCard">
                <img src={props.crestUrl} style={{ width: "8em" }}></img>
                <div className="teamsList">
                    <ul>
                        <li>{props.name}</li>
                        <li>Est. {props.founded}</li>
                        <li>{props.colors}</li>
                        <li>{props.venue}</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default TeamItem
