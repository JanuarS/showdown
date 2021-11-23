import React, {useState} from "react";
import "./ScoreKeeper.css";

const ScoreKeeper = (props) => {
    const team = props.team;
    const [score, setScore] = useState(0);

    return (
        <div className="ScoreKeeper">
            <h1>{team}</h1>
            <h1>{score}</h1>
            <button className="ScoreKeeper-button" onClick={() => setScore(score + 1)}>1 Point</button>
            <button className="ScoreKeeper-button" onClick={() => setScore(score + 2)}>2 Points</button>
            <button className="ScoreKeeper-button" onClick={() => setScore(score + 3)}>3 Points</button>
            <button className="ScoreKeeper-undo" onClick={() => setScore(score - 1)}>UNDO</button>

            <button className="ScoreKeeper-upload">UPLOAD</button>
        </div>
    )
}

export default ScoreKeeper;
