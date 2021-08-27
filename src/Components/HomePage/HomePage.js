import React from 'react'
import "./HomePage.css"
import { Link } from "react-router-dom";


function HomePage() {
    return (
        <div className="mainHome">
            <div style={{ width: "13%", paddingBottom: "1em" }}>
                <img src="/1.png" style={{ width: "100%", height: "100%" }} ></img>
            </div>
            <h1 style={{ color: "#340040" }}>Premier League</h1>
            <div className="btns">
                <Link to="/teams">
                    <button className="btn">Teams</button>
                </Link>
                <Link to="/standings">
                    <button className="btn">Standings</button>
                </Link>
                <Link to="/scores">
                    <button className="btn">Scores / Fixtures</button>
                </Link>
                <Link to="/highlights">
                    <button className="btn">Recent Highlights</button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage
