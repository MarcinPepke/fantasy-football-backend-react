import Fixture from "../Fixture/Fixture";
import NavbarComponent from "./NavbarComponent";
import {Tab, Tabs} from "@material-ui/core";
import {useEffect, useState} from "react";
import {getCurentGameweek, getFixture} from "../api";




const FixtureComponent = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    let [gameweek, setGamewek] = useState();
    const [isSetGameweek, setIsSetGameweek] = useState(false);
    let [fixtures, setFixtures] = useState();
    let[isClikced,setIsCliked] = useState(false);
    const[isGettedFixture,setIsGettedFixture] = useState(false);
    const[gameweekToRember,setRemember] = useState();


    const handleTabChange = (event, newValue) => {

        setSelectedTab(newValue);
        setIsCliked(true);
        console.log(selectedTab)
        handleSetRemember()
        getFixtures();
    };
    useEffect( () => {
        setIsSetGameweek(false)
        getCurentGameweek().then((result) => {
            result.map((round) => {
                console.log(round)
                setGamewek(round.round.replace("Regular Season - ", "").toString())
                setIsSetGameweek(true);
            })
        })
    },[]);

    const handleSetRemember = () => {
        setRemember(parseInt(gameweek));
    }

    const handleSetGameweek = (selected) => {

        console.log("remember " + gameweekToRember)
        if(selected === 2)
            setGamewek(parseInt(parseInt(gameweek)+1));
        else if(selected === 1)
            setGamewek(parseInt(gameweekToRember));
        else
            setGamewek(parseInt(parseInt(gameweek)-1));
    }

    function getFixtures() {
        handleSetGameweek(selectedTab);

        if (isSetGameweek) {

            console.log(gameweek)
            getFixture(gameweek)
                .then(fixture => {
                    console.log(fixture)
                    setFixtures(fixture);
                    setIsGettedFixture(true);
                })
                .catch(error => {
                    console.error('Error fetching budget data:', error);
                });
        }
    }

    return (
        <div>
            <div className="ranking-container">
                <NavbarComponent />
                <Tabs value={selectedTab} onChange={handleTabChange}>
                    <Tab label="Previous gameweek"/>
                    <Tab label="Current gameweek"/>
                    <Tab label="Next gameweek"/>
                </Tabs>

                {isClikced  && isGettedFixture && fixtures.map((fixture, index) => (
                    <div className="card-body">
                        <h5 className="card-title">{fixture.teams.home.name} vs {fixture.teams.away.name}</h5>
                        <h5 className="card-title">{fixture.goals.home} vs {fixture.goals.away}</h5>
                        <p className="card-text">{new Date(fixture.fixture.timestamp * 1000).toLocaleDateString()} {" "}
                            {new Date(fixture.fixture.timestamp * 1000).toLocaleTimeString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default FixtureComponent;