import React, { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'

const HeroNavSearch = () => {
    const { search, setSearch, handleSearch, activeLink } = useContext(MovieContext)

    return (
        <form className="heroNavSearch" onSubmit={handleSearch}>
            {
                activeLink !== "Popular" && (
                    <input type="text" 
                           value={search}
                           onChange={(e) => setSearch(e.target.value)}
                           placeholder="Search for movies..." />
                )
            }
        </form>
    )
}

export default HeroNavSearch