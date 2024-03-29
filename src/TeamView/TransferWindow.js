import TeamInfo from "./TeamInfo";
import PitchView from "./PitchView";
import PlayerCard from "../PlayerCard";
import React, {useState, useEffect, useCallback} from 'react';
import {getAllPlayers, addPlayer, removePlayer, getAllPremierLeaguePlayers} from '../playerService';
import Search from "./serach/Search";
import CreateTeam from "../component/CreateTeam";
import LoginPage from "../Login/LoginPage";
import {createTeam, fetchUserTeam, getBudget, getCurentGameweek, getFixture, isTeam, login, updateTeam} from "../api";
import Player from "./Player";
import player from "./Player";
import Match from "../component/Match";
import Fixture from "../Fixture/Fixture";
import {Button} from "@mui/material";
import {useNavigate} from 'react-router-dom'

import NavbarComponent from "../component/NavbarComponent";


const TransferWindow = ({userTeam, onAddPlayer, onRemovePlayer}) => {
    const navigate = useNavigate();
    const [team, setTeam] = useState(null);
    const [gameweek, setGamewek] = useState();


    const [lineup, setLineup] = useState({
        Goalkeeper: [],
        Defender: [],
        Midfielder: [],
        Attacker: [],
    });

    const [budget, setBudget] = useState(0)
    const [isSetGameweek, setIsSetGameweek] = useState(false);


    const [fixtures, setFixtures] = useState(null);

    useEffect(() => {
        setIsSetGameweek(false)
        getCurentGameweek().then((result) => {
            result.map((round) => {

                setGamewek(round.round.replace("Regular Season - ", "").toString())
                setIsSetGameweek(true);
                console.log(gameweek)

            })
        })
    },[]);


    useEffect(() => {
        fetchUserTeam().then((teamData) => {
            if (teamData != null) {
                setTeam(teamData);


                const lineupData = {
                    Goalkeeper: Array.isArray(teamData) ? teamData.filter(player => player.position === 'Goalkeeper') : [],
                    Defender: Array.isArray(teamData) ? teamData.filter(player => player.position === 'Defender') : [],
                    Midfielder: Array.isArray(teamData) ? teamData.filter(player => player.position === 'Midfielder') : [],
                    Attacker: Array.isArray(teamData) ? teamData.filter(player => player.position === 'Attacker') : [],
                };
                setLineup(lineupData);
            }
        })
    }, []);
    useEffect(() => {
        getBudget()
            .then(fetchedBudget => {
                console.log(budget)
                setBudget(fetchedBudget);
            })
            .catch(error => {
                if (error.response.status === 403)
                    navigate("/login");
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

    function removeFromLineup(playerId, playerPosition, playerPrice) {
        console.log(playerPrice)

        // Step 3: Update the `lineup` state after removing the player
        setLineup((prevLineup) => {
            const updatedPosition = prevLineup[playerPosition] ? prevLineup[playerPosition].filter(
                (p) => p.id !== playerId
            ) : [];
            return {
                ...prevLineup,
                [playerPosition]: updatedPosition,
            };
        });

        // Step 4: Update the `budget` state after removing the player
        setBudget((prevBudget) => prevBudget + playerPrice);
    }


    function addToLineup(player, event) {
        event.preventDefault();


        const playerAlreadyInLineup = Object.values(lineup).some((position) =>
            position.some((existingPlayer) => existingPlayer.id === player.id)
        );

        if (playerAlreadyInLineup) {
            alert("Player is already in the lineup");
            return;
        }
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

    function makeTransfers() {
        if (lineup.Attacker.length + lineup.Defender.length + lineup.Midfielder.length + lineup.Goalkeeper.length === 15) {
            updateTeam(lineup, budget).then((team) => {
                console.log(team);
            })
        } else
            alert("There must be 15 players in the squad to make the transfer");
    }

    return (

        <div className="sQB1U">
            <div className="ddsf">

            </div>

            <NavbarComponent/>
            <div className="kciYco">
                <div className="kzyLIB">
                    <div className="wXYnc">
                        <div className="cGWMgT">
                            <h2 className="btMgbK"> Transfers </h2>
                        </div>
                        <div>


                            <div className="gArsoz">
                                <TeamInfo
                                    gameweek={gameweek}
                                    lineupSize={lineup.Attacker.length + lineup.Defender.length + lineup.Midfielder.length + lineup.Goalkeeper.length}
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
                                                            <Player fixtures={fixtures} club={player.club.name}
                                                                    key={player.id} photo={player.photo}
                                                                    price={player.price} name={player.name}
                                                                    removeFromLineup={removeFromLineup}
                                                                    playerId={player.id}
                                                                    points={player.currentGameWeekPoints}
                                                                    playerPosition={player.position}/>
                                                        </div>
                                                    )))}

                                                </div>
                                                <div className="iAuEaL-gPAVqU">
                                                    {lineup.Defender.map((player => (
                                                        <div key={player.id} className="gAzdNx">
                                                            <Player club={player.club.name}
                                                                    points={player.currentGameWeekPoints}
                                                                    fixtures={fixtures}
                                                                    key={player.id} photo={player.photo}
                                                                    price={player.price} name={player.name}
                                                                    removeFromLineup={removeFromLineup}
                                                                    playerId={player.id}
                                                                    playerPosition={player.position}/>
                                                        </div>
                                                    )))}

                                                </div>
                                                <div className="iAuEaL-gPAVqU">
                                                    {lineup.Midfielder.map((player => (
                                                        <div key={player.id} className="gAzdNx">
                                                            <Player fixtures={fixtures} club={player.club.name}
                                                                    key={player.id} photo={player.photo}
                                                                    price={player.price} name={player.name}
                                                                    removeFromLineup={removeFromLineup}
                                                                    points={player.currentGameWeekPoints}
                                                                    playerId={player.id}
                                                                    playerPosition={player.position}/>
                                                        </div>
                                                    )))}

                                                </div>
                                                <div className="iAuEaL-gPAVqU">
                                                    {lineup.Attacker.map((player => (
                                                        <div key={player.id} className="gAzdNx">
                                                            <Player fixtures={fixtures} club={player.club.name}
                                                                    key={player.id} photo={player.photo}
                                                                    price={player.price} name={player.name}
                                                                    points={player.currentGameWeekPoints}
                                                                    removeFromLineup={removeFromLineup}
                                                                    playerId={player.id}
                                                                    playerPosition={player.position}
                                                                    playerPrice={player.price}/>
                                                        </div>
                                                    )))}

                                                </div>
                                            </div>
                                            <div className="saveContainer">
                                                <Button className="saveButton" onClick={makeTransfers}>MAKE
                                                    TRANSFERS</Button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="bVraMK">

                        <Search addToLineup={addToLineup} lineup={lineup} budget={budget} setBudget={setBudget}
                                setLineup={setLineup}/>

                    </div>
                </div>
            </div>
            <br/>
            <div className="fixtures-container">

                <Fixture gameweek={gameweek} isSetGameweek={isSetGameweek}/>


            </div>

        </div>
    );
};

export default TransferWindow;
