import React, { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'
import Container from '../container'
import './style.scss'

function MoviesPagination() {
    const { currentPage, newPage, showPagination } = useContext(MovieContext)

    return (
        <div className="moviesPagination">
            {
                showPagination && (
                    <Container className="container">
                        <button onClick={() => newPage("previous")}
                            style={{
                                cursor: currentPage !== 1 ? "pointer" : "not-allowed",
                                background: currentPage !== 1 ? "#32de57" : "#303847"
                            }} >Prev Page</button>
                        <button onClick={() => newPage("next")}>Next Page</button>
                    </Container>
                )
            }
        </div>
    )
}

export default MoviesPagination
