import React, {useState} from "react";
import "./style.css";

/*
    ScoreKeeper creates an array of scores and renders the last score in the array, known as the most up-to-date score. 
    
    Add methods adds the score to the last index and pushes the result to the end of the array. The spread operator creates a new array reference for React to rerender the score. 

    Undo method pops/removes the last index.
*/

const ScoreKeeper = ({team}) => {
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

    return (
        <div className="ScoreKeeper">
            <h1>{team}</h1>
            <h1>{score[score.length - 1]}</h1>
            
            <div className="ScoreKeeper-buttons">
                <button className="ScoreKeeper-add" onClick={add1}>+1</button>
                <button className="ScoreKeeper-add" onClick={add2}>+2</button>
                <button className="ScoreKeeper-add" onClick={add3}>+3</button>
            </div>

            <div className="ScoreKeeper-buttons">
                <button className="ScoreKeeper-undo" onClick={undo}>UNDO</button>
            </div>
        </div>
    );
}

export default ScoreKeeper;
