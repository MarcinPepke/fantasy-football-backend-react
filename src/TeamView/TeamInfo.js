
import React from "react";
import GameweekInfo from "./GameweekInfo";
import MoneyInfo from "./MoneyInfo";
import PlayerStatus from "./PlayerStatus";


function TeamInfo({budget}){
    return(
        <div className="eBaJTr">
            <GameweekInfo />
            <div class="gfuSqG">
                <PlayerStatus/>
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