import React from 'react';

function Search({setSearch, search}) {

  /*   const[search, setSearch]=useState("") */;

    const text = (e) =>{
        setSearch(e.target.value)
    };

    return (
        <div className="search">
            <div>

                <input type="text" value={search} onChange={text}  />
            </div>

        </div>
    )
};

export default Search;