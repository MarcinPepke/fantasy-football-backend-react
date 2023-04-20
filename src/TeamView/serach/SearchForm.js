import React from "react";
import {useState, useEffect} from "react";
import ReactPaginate from "react-paginate";
import {searchEngine} from "../../api";
import Pagination from '@mui/material/Pagination';

import styles from '/_________jd/demo/demo/fantasy-football/src/Fixture/SeachCss.css'


function SearchForm({addToLineup, budget, setBudget, lineup, setLineup}) {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [price, setPrice] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(0);

    let [domain, setDomain] = useState();
    let [isTransferPage, setIsTransferPage] = useState();

    useEffect(() => {
        setDomain(window.location.href);
        if (domain === "http://localhost:3000/transfers") setIsTransferPage(true);
    }, [domain, isTransferPage]);

    const searchEngineProps = {
        addToLineup: addToLineup,
    };


    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handlePositionChange(event) {
        setPosition(event.target.value);
    }

    function handlePriceChange(event) {
        setPrice(event.target.value);
    }

    function handlePageClick({selected}) {
        setCurrentPage(selected);
        fetchSearchResults(selected);
    }

    const handleAddToLineup = (player, event) => {
        addToLineup(player, event);
    };

    function fetchSearchResults(pageNumber = 0) {
        searchEngine(name, position, price, pageNumber)
            .then(response => {
                setSearchResults(response.content);
                setTotalPages(response.totalPages);
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        fetchSearchResults();
    }, [name, position, price]);

    return (
        <div>
            <div className="bJuGb">
                <div className="Bqmb">
                    <label for="filter">
                        <div>
                            <span className="kdCeZz">View</span>
                        </div>
                    </label>
                    <select
                        id="filter"
                        className="cTghCB"
                        onChange={handlePositionChange}
                        name="filter"
                    >
                        <optgroup label="Global">
                            <option value="all" aria-selected="true" class="kdSPtv">
                                All players
                            </option>
                        </optgroup>
                        <optgroup label="By Position">
                            <option value="Goalkeeper" aria-selected="false" class="kdSPtv">
                                Goalkeepers
                            </option>
                            <option value="Defender" aria-selected="false" class="kdSPtv">
                                Defenders
                            </option>
                            <option value="Midfielder" aria-selected="false" class="kdSPtv">
                                Midfielders
                            </option>
                            <option value="Attacker" aria-selected="false" class="kdSPtv">
                                Attacker
                            </option>
                        </optgroup>
                        <optgroup label="By Team">
                            <option value="Arsenal" aria-selected="false" class="kdSPtv">
                                Arsenal
                            </option>
                        </optgroup>
                    </select>
                </div>
            </div>
            <div className="bJuGb">
                <div className="Bqmb">
                    <label for="sort">
                        <div>
                            <span class="kdCeZz">Sorted by</span>
                        </div>
                    </label>
                    <select
                        id="sort"
                        className="cTghCB"
                        name="sortedBy"
                    >
                        <option value="Total points" aria-selected="false" class="kdSPtv">
                            Total points
                        </option>
                        <option value="Price" aria-selected="false" class="kdSPtv">
                            Price
                        </option>
                        <option value="totalGoals" aria-selected="false" class="kdSPtv">
                            Goals scored
                        </option>
                        <option value="totalAssists" aria-selected="false" class="kdSPtv">
                            Assists
                        </option>
                        <option
                            value="totalCleanSheets"
                            aria-selected="false"
                            class="kdSPtv"
                        >
                            Clean sheets
                        </option>
                        <option value="yellow_cards" aria-selected="false" class="kdSPtv">
                            Yellow cards
                        </option>
                        <option value="red_cards" aria-selected="false" class="kdSPtv">
                            Red cards
                        </option>
                    </select>
                </div>
            </div>
            <div className="bJuGb">
                <div className="Bqmb">
                    <label for="maxCost">
                        <div>
                            <span class="kdCeZz">Max cost</span>
                            <span aria-describedby="maxCost" class="jQchVq">
                Between 3.8 and 12.8
              </span>
                        </div>
                    </label>
                    <select
                        id="maxCost"
                        class="cTghCB"
                        onChange={handlePriceChange}
                        name="maxCost"
                    >
                        <option value="12.8" aria-selected="false" class="kdSPtv">
                            12.8
                        </option>
                        <option value="12.3" aria-selected="true" class="kdSPtv">
                            12.3
                        </option>
                        <option value="11.8" aria-selected="false" class="kdSPtv">
                            11.8
                        </option>
                        <option value="11.3" aria-selected="false" class="kdSPtv">
                            11.3
                        </option>
                        <option value="10.8" aria-selected="false" class="kdSPtv">
                            10.8
                        </option>
                        <option value="10.3" aria-selected="false" class="kdSPtv">
                            10.3
                        </option>
                        <option value="9.8" aria-selected="false" class="kdSPtv">
                            9.8
                        </option>
                        <option value="9.3" aria-selected="false" class="kdSPtv">
                            9.3
                        </option>
                        <option value="8.8" aria-selected="false" class="kdSPtv">
                            8.8
                        </option>
                        <option value="8.3" aria-selected="false" class="kdSPtv">
                            8.3
                        </option>
                        <option value="7.8" aria-selected="false" class="kdSPtv">
                            7.8
                        </option>
                        <option value="7.3" aria-selected="false" class="kdSPtv">
                            7.3
                        </option>
                        <option value="6.8" aria-selected="false" class="kdSPtv">
                            6.8
                        </option>
                        <option value="6.3" aria-selected="false" class="kdSPtv">
                            6.3
                        </option>
                        <option value="5.8" aria-selected="false" class="kdSPtv">
                            5.8
                        </option>
                        <option value="5.3" aria-selected="false" class="kdSPtv">
                            5.3
                        </option>
                        <option value="4.8" aria-selected="false" class="kdSPtv">
                            4.8
                        </option>
                        <option value="4.3" aria-selected="false" class="kdSPtv">
                            4.3
                        </option>
                        <option value="3.8" aria-selected="false" class="kdSPtv">
                            3.8
                        </option>
                    </select>
                </div>
            </div>
            <div className="ippgjc">
        <span class="dNLdnR">
          <label>Search</label>
        </span>
                <div className="gdZHSz">
                    <input
                        type="search"
                        id="search"
                        className="jPIsxM"
                        value={name}
                        onChange={handleNameChange}
                        autoComplete="off"
                    />
                    <ul>
                        {searchResults.map((player) => (
                            <li key={player.id} className="player-item-container">
                                {player.name} - {player.position} - {player.price}
                                {isTransferPage ?
                                    <button className="add-to-lineup-button"
                                            onClick={(event) => addToLineup(player, event)}>
                                        Add to Lineup
                                    </button>
                                 : null}
                            </li>
                        ))}


                    </ul>

                    <Pagination
                        count={totalPages}
                        page={currentPage + 1}
                        onChange={(event, value) => {
                            setCurrentPage(value - 1)
                            fetchSearchResults(value - 1)
                        }}
                        color="primary"
                        size="large"
                    />


                </div>
            </div>
        </div>
    )
}

export default SearchForm;
