import React from 'react';
import "./Search.css"

function Search({getQuote}) { 

    return (
        <form onSubmit={getQuote} className="Search">
            <input 
                label="search"
                aria-label="search"
                htmlFor="search"
                type="text" 
                name="search" 
                placeholder="...life" />
        </form>
    );
}

export default Search;