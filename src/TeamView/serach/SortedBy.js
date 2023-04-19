import React from "react";

function SortedBy(){
    return(
        <div className="bJuGb">
            <div className="Bqmb">
                <label for="sort">
                    <div>
                        <span class="kdCeZz">Sorted by</span>
                    </div>
                </label>
                <select id="sort" className="cTghCB">
                    <option value="total_points" aria-selected="false" class="kdSPtv">Total points</option>
                    <option value="now_cost" aria-selected="false" class="kdSPtv">Price</option>
                    <option value="goals_scored" aria-selected="false" class="kdSPtv">Goals scored</option>
                    <option value="assists" aria-selected="false" class="kdSPtv">Assists</option>
                    <option value="clean_sheets" aria-selected="false" class="kdSPtv">Clean sheets</option>
                    <option value="yellow_cards" aria-selected="false" class="kdSPtv">Yellow cards</option>
                    <option value="red_cards" aria-selected="false" class="kdSPtv">Red cards</option>
                </select>
            </div>
        </div>
    )
}
export default SortedBy;