
import React from "react";
import GameweekInfo from "./GameweekInfo";
import MoneyInfo from "./MoneyInfo";
import PlayerStatus from "./PlayerStatus";


function TeamInfo({budget, lineupSize, gameweek}){
    return(
        <div className="eBaJTr">
            <GameweekInfo gameweek={gameweek} />
            <div class="gfuSqG">
                <PlayerStatus lineupSize={lineupSize}/>
                <MoneyInfo budget={budget}/>
            </div>
            <div className="fzUAnN">
                <div className="iUkdMW">
                </div>
                <div className="iUkdMW">
                </div>
            </div>

        </div>
    )
}
export default TeamInfo;