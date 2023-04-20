import React from "react";

function PlayerStatus({lineupSize}){
    return(
        <div role="status" class="geFKnm">
            <h3 className="fjxAQg">Players Selected</h3>
            <div className="jPLXfX">{lineupSize} / 15</div>
        </div>
    )
}
export default PlayerStatus;