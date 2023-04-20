import React from "react";

function MoneyInfo({budget}){
    return(
        <div role="status" class="geFKnm">
            <h3 className="fjxAQg">Money Remaining</h3>
            <div className="jPLXfX">{parseFloat(budget.toFixed(2))}</div>
        </div>
    )
}
export default MoneyInfo;