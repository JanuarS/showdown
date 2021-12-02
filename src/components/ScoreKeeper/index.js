import React, {useState} from "react";
import "./style.css";

const ScoreKeeper = (props) => {
    const team = props.team;
    const [score, setScore] = useState([0]);

    const add1 = () => {
        score.push(score[score.length - 1] + 1);
        setScore([...score]);   
    }
    const add2 = () => {
        score.push(score[score.length - 1] + 2);
        setScore([...score]);     }
    const add3 = () => {
        score.push(score[score.length - 1] + 3);
        setScore([...score]);     }
    const undo = () => {
        if(score[score.length - 1] !== 0) {
            score.pop();
            setScore([...score]);
        }
    }
    const upload = () => {
        // upload score array to database.
    }

    return (
        <div className="ScoreKeeper">
            <h1>{team}</h1>
            <h1>{score[score.length - 1]}</h1>
            
            <div className="ScoreKeeper-buttons">
                <button className="ScoreKeeper-add" onClick={add1}>1 Point</button>
                <button className="ScoreKeeper-add" onClick={add2}>2 Points</button>
                <button className="ScoreKeeper-add" onClick={add3}>3 Points</button>
            </div>

            <div className="ScoreKeeper-buttons">
                <button className="ScoreKeeper-undo" onClick={undo}>UNDO</button>
                <button className="ScoreKeeper-upload" onClick={upload}>UPLOAD</button>
            </div>
        </div>
    );
}

export default ScoreKeeper;
