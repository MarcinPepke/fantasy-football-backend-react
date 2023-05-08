import React, {useEffect, useState} from "react";

function GameweekInfo({gameweek}){


    const[deadline,setDeadline] = useState(new Date());

    useEffect(() => {
        var dayOfWeek = 5;//friday
        var date = new Date();
        date.setDate(date.getDate() + (dayOfWeek + 7 - date.getDay()) % 7);
        setDeadline(date);
        console.log(deadline)
    },[])

    return(
        <div className="c0zWYq">
            <div className="dbiWsa">
                <div className="jiHQzw">
                    <h3 className="kVZXCD">GAMEWEEK ?</h3>
                </div>
            </div>
            <div className="fuooDk">
                <h4>Gameweek {gameweek} deadline: </h4>
                <h4>{deadline.toLocaleDateString()}</h4>
            </div>
        </div>
    )
}
export default GameweekInfo;