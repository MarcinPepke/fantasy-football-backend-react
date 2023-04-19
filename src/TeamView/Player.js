import {useEffect, useState} from "react";

function Player({photo, name, price}) {
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
                        src="https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_13_1-66.webp"
                        id={"img" + {photo}}
                    ></img>
                    <div className="gTayAP">
                        <div className="etyMDj">{name}</div>
                        <div className="fQREvA" > {isTransferPage
                            ? price
                            : null}</div>
                    </div>
                </button>
                <div className="iltiUk">
                    <div className="kpKuzr">
                        <button type="button" className="fBGUqJ">
                                {/*// onClick={() => deleteToPlayer(props.playersToShow.id, props.playersToShow.price)}*/}
                            <div className="jvXZab">
                                <img></img>
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