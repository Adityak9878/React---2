// Following is the display of two methods which are used to show how states can be hadnled for two
// distinct elements of one particular state.


import { useState } from "react"

export default function ScoreKeeper(){
    const [score,setscore] = useState({p1Score:0,p2Score:0});
    const IncScoreP1= () => {
        const NewSCore={...score,p1Score:score.p1Score+1};
        setscore(NewSCore);
    }
    const IncScoreP2 = () =>{
        setscore((oldScores)=>{
            return {...oldScores,p2Score:oldScores.p2Score+1};
        });
    }
    return (
        <div>
            <h2>Player 1: {score.p1Score}</h2>
            <h2>Player 2: {score.p2Score}</h2>
            <button style={{margin:"10px", border:"5px Solid aqua"}} onClick={IncScoreP1}>Player1 +1</button>
            <button style={{margin:"10px", border:"5px Solid aqua"}} onClick={IncScoreP2}>Player2 +1</button>
        </div>
    )
}