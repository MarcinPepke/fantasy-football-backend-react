import TeamInfo from "./TeamInfo";
import PitchView from "./PitchView";
import PlayerCard from "../PlayerCard";
import React, {useState, useEffect} from 'react';
import {getAllPlayers, addPlayer, removePlayer, getAllPremierLeaguePlayers} from '../playerService';
import Search from "./serach/Search";
import CreateTeam from "../component/CreateTeam";
import LoginPage from "../Login/LoginPage";
import {createTeam, fetchUserTeam, getBudget, login} from "../api";

function Navbar() {
    return null;
}

const TransferWindow = ({userTeam, onAddPlayer, onRemovePlayer}) => {
    const [team, setTeam] = useState(null);
    const [hasTeam, setHasTeam] = useState(false);
    const [teamName, setTeamName] = useState('');
    const [isToken, setIsToken] = useState(false);

    const [lineup, setLineup] = useState({
        goalkeepers: [],
        defenders: [],
        midfielders: [],
        forwards: [],
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
                    goalkeepers: Array.isArray(teamData) ? teamData.filter(player => player.position === 'Goalkeeper') : [],
                    defenders: Array.isArray(teamData) ? teamData.filter(player => player.position === 'Defender') : [],
                    midfielders: Array.isArray(teamData) ? teamData.filter(player => player.position === 'Midfielder') : [],
                    forwards: Array.isArray(teamData) ? teamData.filter(player => player.position === 'Attacker') : [],
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

    function addToLineup(player,event) {
        event.preventDefault();
        console.log(player)
        if (budget - player.price < 0) {
            alert("Not enough budget");
            return;
        }

        if (lineup[player.position].length >= getMaximumPlayersForPosition(player.position)) {
            alert("Maximum players for this position reached");
            return;
        }

        setLineup({
            ...lineup,
            [player.position]: [...lineup[player.position], player],
        });

        setBudget(budget - player.price);
    }

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
                                                        {lineup.goalkeepers.map((player => (
                                                            <div className="gAzdNx">
                                                                {player.name}
                                                            </div>
                                                        )))}

                                                        <div className="gAzdNx">

                                                        </div>
                                                        <div className="gAzdNx">

                                                        </div>
                                                        <div className="gAzdNx"></div>
                                                    </div>
                                                    <div className="iAuEaL-gPAVqU">
                                                        <div className="gAzdNx">

                                                        </div>
                                                        <div className="gAzdNx">

                                                        </div>
                                                        <div className="gAzdNx">

                                                        </div>
                                                        <div className="gAzdNx">

                                                        </div>
                                                        <div className="gAzdNx">

                                                        </div>
                                                    </div>
                                                    <div className="iAuEaL-gPAVqU">
                                                        <div className="gAzdNx">

                                                        </div>
                                                        <div className="gAzdNx">

                                                        </div>
                                                        <div className="gAzdNx">

                                                        </div>
                                                        <div className="gAzdNx">

                                                        </div>
                                                        <div className="gAzdNx">

                                                        </div>
                                                    </div>
                                                    <div className="iAuEaL-gPAVqU">
                                                        <div className="gAzdNx">

                                                        </div>
                                                        <div className="gAzdNx">

                                                        </div>
                                                        <div className="gAzdNx">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="bVraMK">

                            <Search addToLineup={addToLineup}/>

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default TransferWindow;
