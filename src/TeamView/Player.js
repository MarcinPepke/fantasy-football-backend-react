import {useEffect, useState} from "react";

function Player({photo, name, price, removeFromLineup, playerId, playerPosition, fixtures, club, points}) {
    let [domain, setDomain] = useState();
    let [isTransferPage, setIsTransferPage] = useState();


    useEffect(() => {
        setDomain(window.location.href);
        if (domain === "http://localhost:3000/transfers") setIsTransferPage(true);
    }, [domain, isTransferPage]);
    return (

        <div className="bWWMeR">
            <div className="jLgWI">
                <button type="button" className="fBGUqJ">
                    <img
                        className="flTOZR"
                        alt="xd"
                        src={photo}
                        id={"img" + {photo}}
                    ></img>
                    <div className="gTayAP">
                        <div className="etyMDj">{name}</div>
                        <div className="fQREvA"> {isTransferPage
                            ? price
                            : points
                        }
                        </div>
                    </div>
                </button>
                <div className="iltiUk">
                    <div className="kpKuzr">
                        <button type="button" className="fBGUqJ"
                                onClick={(event) => removeFromLineup(playerId, playerPosition, price, event)}>

                            <div className="jvXZab">
                                <i className="fas fa-trash"></i>
                            </div>
                            <span className="dnLdnR">Remove player </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Player;