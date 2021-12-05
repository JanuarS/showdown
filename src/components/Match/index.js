import React, {useState} from 'react';
import ScoreKeeper from '../ScoreKeeper/index';
import "./style.css";

/*
    Match component renders two ScoreKeeper child components--one for each team.

    'Start Match' button reveals the ScoreKeeper components and updates the Matches page.

    'Upload' button uploads the most recent scores to the database.

    Props:
    - competition (football/basketball/volleyball/soccer)
    - match=[opponent1, opponent2]
    - points=[1,2,3,7] (football)
    - points=[1,2,3] (basketball)
    - points=[1] (volleyball)
    - points=[1] (soccer)
    * points could be dynamic depending on sport. 

    match.map(team => <ScoreKeeper team={team} />) // map over the match array
*/

const Match = ({comp, teams, points}) => {
    const upload = () => {
        
    }

    return (
        <div>
            <div className='Match'>
                <ScoreKeeper team='Red Team'/>
                <h2>vs.</h2>
                <ScoreKeeper team='Blue Team'/>
            </div>
            <div>
                <button className='Match-upload' onClick={upload}>UPLOAD</button>
            </div>
        </div>
    )
}

export default Match;