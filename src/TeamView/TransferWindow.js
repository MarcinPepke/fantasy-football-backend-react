import TeamInfo from "./TeamInfo";
import PitchView from "./PitchView";
import PlayerCard from "../PlayerCard";
import React, {useState, useEffect, useCallback} from 'react';
import {getAllPlayers, addPlayer, removePlayer, getAllPremierLeaguePlayers} from '../playerService';
import Search from "./serach/Search";
import CreateTeam from "../component/CreateTeam";
import LoginPage from "../Login/LoginPage";
import {createTeam, fetchUserTeam, getBudget, getFixture, login} from "../api";
import Player from "./Player";
import player from "./Player";
import Match from "../component/Match";
import Fixture from "../Fixture/Fixture";

function Navbar() {
    return null;
}

const TransferWindow = ({userTeam, onAddPlayer, onRemovePlayer}) => {
    const [team, setTeam] = useState(null);
    const [hasTeam, setHasTeam] = useState(false);
    const [teamName, setTeamName] = useState('');
    const [isToken, setIsToken] = useState(false);

    const [lineup, setLineup] = useState({
        Goalkeeper: [],
        Defender: [],
        Midfielder: [],
        Attacker: [],
    });

    const [budget, setBudget] = useState(0)


    const handleCreateTeam = (name) => {
        createTeam(name).then(r => alert("stworzono druzyne"));
    };

    useEffect(() => {
        fetchUserTeam().then((teamData) => {
            if (teamData) {
                setHasTeam(true);
                setTeam(teamData);


                const lineupData = {
                    Goalkeeper: Array.isArray(teamData) ? teamData.filter(player => player.position === 'Goalkeeper') : [],
                    Defender: Array.isArray(teamData) ? teamData.filter(player => player.position === 'Defender') : [],
                    Midfielder: Array.isArray(teamData) ? teamData.filter(player => player.position === 'Midfielder') : [],
                    Attacker: Array.isArray(teamData) ? teamData.filter(player => player.position === 'Attacker') : [],
                };
                setLineup(lineupData);
            } else
                setHasTeam(false);
        })
    })
    useEffect(() => {
        getBudget()
            .then(fetchedBudget => {
                console.log(budget)
                setBudget(fetchedBudget);
            })
            .catch(error => {
                console.error('Error fetching budget data:', error);
            });
    }, []);


    function getMaximumPlayersForPosition(position) {
        const positionKey = getPositionKey(position);
        switch (positionKey) {
            case "Goalkeeper":
                return 2;
            case "Defender":
                return 5;
            case "Midfielder":
                return 5;
            case "Attacker":
                return 3;
            default:
                return 0;
        }

    }

    function addToLineup(player, event) {
        event.preventDefault();

        if (budget - player.price < 0) {
            alert("Not enough budget");
            return;
        }

        const positionKey = getPositionKey(player.position);
        if (lineup[positionKey].length >= getMaximumPlayersForPosition(player.position)) {
            alert("Maximum players for this position reached");
            return;
        }

        setLineup(prevLineup => ({
            ...prevLineup,
            [player.position]: [...prevLineup[player.position], player],
        }));

        setBudget((prevBudget) => prevBudget - player.price);
    }




    function getPositionKey(position) {
        const positionMap = {
            Goalkeeper: "Goalkeeper",
            Defender: "Defender",
            Midfielder: "Midfielder",
            Attacker: "Attacker",
        };

        return positionMap[position] || "";
    }

    return (

        <div className="sQB1U">
            <div className="ddsf">

            </div>

            <Navbar/>
            {!hasTeam && isToken ? (
                <CreateTeam onCreateTeam={handleCreateTeam}/>
            ) : (
                <div className="kciYco">
                    <div className="kzyLIB">
                        <div className="wXYnc">
                            <div className="cGWMgT">
                                <h2 className="btMgbK"> Transfers </h2>
                            </div>
                            <div>


                                <div className="gArsoz">
                                    <TeamInfo
                                        budget={budget}
                                    />
                                    <div role="status"></div>
                                    <div>
                                        <PitchView/>
                                        <div>
                                            <div className="gg0nwe">

                                                <div className="dEnEMP">
                                                    <div className="iAuEaL-gPAVqU">
                                                        {lineup.Goalkeeper.map((player => (
                                                            <div key={player.id} className="gAzdNx">
                                                                <Player key={player.id} photo={player.photo} price={player.price} name={player.name} />
                                                            </div>
                                                        )))}

                                                    </div>
                                                    <div className="iAuEaL-gPAVqU">
                                                        {lineup.Defender.map((player => (
                                                            <div key={player.id} className="gAzdNx">
                                                                <Player key={player.id} photo={player.photo} price={player.price} name={player.name} />
                                                            </div>
                                                        )))}

                                                    </div>
                                                    <div className="iAuEaL-gPAVqU">
                                                        {lineup.Midfielder.map((player => (
                                                            <div   key={player.id} className="gAzdNx">
                                                                <Player key={player.id} photo={player.photo} price={player.price} name={player.name} />
                                                            </div>
                                                        )))}

                                                    </div>
                                                    <div className="iAuEaL-gPAVqU">
                                                        {lineup.Attacker.map((player => (
                                                            <div key={player.id} className="gAzdNx">
                                                               <Player key={player.id} photo={player.photo} price={player.price} name={player.name} />
                                                            </div>
                                                        )))}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="bVraMK">

                            <Search addToLineup={addToLineup} lineup={lineup} budget={budget} setBudget={setBudget} setLineup={setLineup}/>

                        </div>
                    </div>
                </div>
            )}
            <div className="fixtures-display">
                <Fixture />
            </div>
        </div>
    );
};

export default TransferWindow;
