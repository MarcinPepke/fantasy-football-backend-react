import TeamInfo from "./TeamInfo";
import PitchView from "./PitchView";
import PlayerCard from "../PlayerCard";
import React, {useState, useEffect, useCallback} from 'react';
import {getAllPlayers, addPlayer, removePlayer, getAllPremierLeaguePlayers} from '../playerService';
import Search from "./serach/Search";
import CreateTeam from "../component/CreateTeam";
import LoginPage from "../Login/LoginPage";
import {createTeam, fetchUserTeam, getBudget, login} from "../api";
import Player from "./Player";

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
        switch (position) {
            case 'Goalkeeper':
                return 2;
            case 'Defender':
                return 5;
            case 'Midfielder':
                return 5;
            case 'Attacker':
                return 3;
            default:
                return 0;
        }
    }

    const addToLineup = useCallback((player, event) => {
        event.preventDefault();
        if (budget - player.price < 0) {
            alert("Not enough budget");
            return;
        }


        if (lineup["Defender"].length >= getMaximumPlayersForPosition(player.position)) {
            console.log(lineup[player.position].length)
            alert("Maximum players for this position reached");
            return;
        }

        setLineup(prevLineup => ({
            ...prevLineup,
            [player.position]: [...prevLineup[player.position], player],
        }));

        console.log(lineup)

        setBudget(budget - player.price);
    }, [lineup, setLineup]);

    function removeFromLineup(player) {
        setLineup({
            ...lineup,
            [player.position]: lineup[player.position].filter(p => p.id !== player.id),
        });

        setBudget(budget + player.price);
    }

    return (
        <div className="sQB1U">
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
                                                            <div className="gAzdNx">
                                                                {player.name}
                                                            </div>
                                                        )))}

                                                       {/* <div className="gAzdNx">

                                                        </div>
                                                        <div className="gAzdNx">

                                                        </div>
                                                        <div className="gAzdNx"></div>*/}
                                                    </div>
                                                    <div className="iAuEaL-gPAVqU">
                                                        {lineup.Defender.map((player => (
                                                            <div className="gAzdNx">
                                                                <Player photo={player.photo} price={player.price} name={player.name} />
                                                            </div>
                                                        )))}
                                                       {/* <div className="gAzdNx">

                                                        </div>
                                                        <div className="gAzdNx">

                                                        </div>
                                                        <div className="gAzdNx">

                                                        </div>
                                                        <div className="gAzdNx">

                                                        </div>*/}
                                                    </div>
                                                    <div className="iAuEaL-gPAVqU">
                                                        {lineup.Midfielder.map((player => (
                                                            <div className="gAzdNx">
                                                                {player.name}
                                                            </div>
                                                        )))}
                                                        {/*<div className="gAzdNx">*/}

                                                        {/*</div>*/}
                                                        {/*<div className="gAzdNx">*/}

                                                        {/*</div>*/}
                                                        {/*<div className="gAzdNx">*/}

                                                        {/*</div>*/}
                                                        {/*<div className="gAzdNx">*/}

                                                        {/*</div>*/}
                                                    </div>
                                                    <div className="iAuEaL-gPAVqU">
                                                        {lineup.Attacker.map((player => (
                                                            <div className="gAzdNx">
                                                               <Player photo={player.photo} price={player.price} name={player.name} />
                                                            </div>
                                                        )))}
                                                        {/*<div className="gAzdNx">*/}

                                                        {/*</div>*/}
                                                        {/*<div className="gAzdNx">*/}

                                                        {/*</div>*/}
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

        </div>
    );
};

export default TransferWindow;
