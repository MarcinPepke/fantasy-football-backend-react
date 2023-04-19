import React from "react";

function PriceSearch(){
    return(
        <div className="bJuGb">
            <div className="Bqmb">
                <label for="maxCost">
                    <div>
                        <span class="kdCeZz">Max cost</span>
                        <span aria-describedby="maxCost" class="jQchVq">Between 3.8 and 12.8</span>
                    </div>
                </label>
                <select id="maxCost" class="cTghCB">
                    <option value="128" aria-selected="false" class="kdSPtv">12.8</option>
                    <option value="123" aria-selected="true" class="kdSPtv">12.3</option>
                    <option value="118" aria-selected="false" class="kdSPtv">11.8</option>
                    <option value="113" aria-selected="false" class="kdSPtv">11.3</option>
                    <option value="108" aria-selected="false" class="kdSPtv">10.8</option>
                    <option value="103" aria-selected="false" class="kdSPtv">10.3</option>
                    <option value="98" aria-selected="false" class="kdSPtv">9.8</option>
                    <option value="93" aria-selected="false" class="kdSPtv">9.3</option>
                    <option value="88" aria-selected="false" class="kdSPtv">8.8</option>
                    <option value="83" aria-selected="false" class="kdSPtv">8.3</option>
                    <option value="78" aria-selected="false" class="kdSPtv">7.8</option>
                    <option value="73" aria-selected="false" class="kdSPtv">7.3</option>
                    <option value="68" aria-selected="false" class="kdSPtv">6.8</option>
                    <option value="63" aria-selected="false" class="kdSPtv">6.3</option>
                    <option value="58" aria-selected="false" class="kdSPtv">5.8</option>
                    <option value="53" aria-selected="false" class="kdSPtv">5.3</option>
                    <option value="48" aria-selected="false" class="kdSPtv">4.8</option>
                    <option value="43" aria-selected="false" class="kdSPtv">4.3</option>
                    <option value="38" aria-selected="false" class="kdSPtv">3.8</option>
                </select>
            </div>
        </div>
    )
}
export default PriceSearch;