import React, { useState, useEffect, createContext } from 'react'

export const MovieContext = createContext()

export const MovieState = ({ children }) => {
    const API_KEY = "a193a442292595062e5bf50f9b40db20"
    const BASE_URL = "https://api.themoviedb.org/3"

    const [ isLoading, setIsLoading ] = useState(false)
    const [ showPagination, setShowPagination ] = useState(true)
    const [ hiddenMenu, setHiddenMenu ] = useState(true)
    const [ activeLink, setActiveLink ] = useState("Popular")
    const [ popularMovies, setPopularMovies ] = useState([])
    const [ movies, setMovies ] = useState([])
    const [ movieDetail, setMovieDetail ] = useState([])
    const [ search, setSearch ] = useState("")
    const [ currentPage, setCurrentPage ] = useState(1)

    const getPopularMovies = async () => {
        const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        const popularMoviesResponse = await fetch(url)
        const popularMoviesData = await popularMoviesResponse.json()
        setPopularMovies(popularMoviesData)
    }

    const getMovies = async () => {
        const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`
        const response = await fetch(url)
        const data = await response.json()
        if (search.trim() === '') {
            setMovies(data)
        }
    }

    const getMovieDetail = async (id) => {
        const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
        const response = await fetch(url)
        const data = await response.json()
        setMovieDetail(data)
        console.log(data);
    }

    const handleSearch = async (e) => {
        e.preventDefault()
        if (search.trim() === '') return
        const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${currentPage}`
        const searchResponse = await fetch(url)
        const searchData = await searchResponse.json()
        setMovies(searchData)
        setShowPagination(false)
    }

    const newPage = (direction) => {
        if (direction === "next") {
            setCurrentPage((prevCurrent) => prevCurrent + 1)
            setIsLoading(true)
        } else if (direction === "previous" && currentPage !== 1) {
            setCurrentPage((prevCurrent) => prevCurrent - 1)
        }
    }

    useEffect(() => {
        getPopularMovies()
    }, [])

    useEffect(() => {
        if (search.trim() === "") {
            setShowPagination(true)
        }
        getMovies()
    }, [search, currentPage])

    useEffect(() => {
        const loadingTimeOut = setTimeout(() => {
            setIsLoading(false)
        }, 1300);
        return () => clearTimeout(loadingTimeOut)
    }, [movies, currentPage])

    return (
        <MovieContext.Provider 
            value={{ 
                isLoading, setIsLoading,
                showPagination, setShowPagination,
                hiddenMenu, setHiddenMenu, 
                activeLink, setActiveLink, 
                popularMovies, setPopularMovies,
                movieDetail, setMovieDetail,
                movies, setMovies,
                search, setSearch,
                currentPage, setCurrentPage,
                getPopularMovies,
                getMovies,
                getMovieDetail,
                handleSearch,
                newPage
            }}>
            { children }
        </MovieContext.Provider>
    )
}
