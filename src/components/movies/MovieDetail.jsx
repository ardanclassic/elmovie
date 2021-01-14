import React, { Fragment, useContext } from 'react'
import moment from 'moment'
import { MovieContext } from '../../context/MovieContext'
import Container from '../container'
import Loader from '../loader'
import './style.scss'

function MovieDetail() {
    const { movieDetail, isLoading } = useContext(MovieContext)

    return (
        <div className="movieDetail">
            <Container className="container">
                { !isLoading ? 
                    (
                        movieDetail && (
                            <Fragment>
                                <img src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`} alt="backdrop" />
                                <div className="title">
                                    <h1>{ movieDetail.original_title }</h1>
                                    { movieDetail.tagline && (
                                        <h2>"{ movieDetail.tagline }"</h2>
                                    ) }
                                </div>
                                <div className="genre">
                                    { movieDetail.genres && movieDetail.genres.map(res => {
                                        return <span key={ res.id }>{ res.name }</span>
                                    }) }
                                </div>
                                <div className="vote-date">
                                    <span>{ movieDetail.vote_average }</span>
                                    <span>{ moment(movieDetail.release_date).format('LL') }</span>
                                </div>
                                <div className="divider"></div>
                                <div className="summary">
                                    <p>{ movieDetail.overview }</p>
                                </div>
                            </Fragment>
                        )
                    ) : <Loader />
                }
            </Container>
        </div>
    )
}

export default MovieDetail
