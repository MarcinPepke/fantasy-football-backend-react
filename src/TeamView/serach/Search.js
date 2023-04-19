import axios from "axios";
import React, { useEffect, useState } from "react";

import SearchForm from "./SearchForm";
import Tittle from "../Tittle";

function Search({addToLineup, lineup, budget, setBudget, setLineup}) {
    const [clubs, setClubs] = useState([]);
    const [filter, setFilter] = useState();

    /*   useEffect(() => {
      axios
      .get("http://localhost:8080/api/clubs")
      .then((res) => setClubs(res.data));
    }); */


    return (
        <div className="heTWLW">
            <Tittle />
            <form className="emRHbR">
                <SearchForm  addToLineup={addToLineup}
                             setLineup={setLineup}
                             lineup={lineup}
                             budget={budget}
                             setBudget={setBudget} />
            </form>

        </div>
    );
}

export default Search;
