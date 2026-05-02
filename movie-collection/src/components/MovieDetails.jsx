import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import StarRating from './StarRating';
import { useNavigate } from "react-router-dom";

const MovieDetails = () => {
    const { id } = useParams({});
    const location = useLocation();
    const movie = location.state?.m;
    //console.log('movie....',movie);
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(`/`);
    }

    return (
        <>
            <div style={{ margin: "20px", fontWeight: "bold" }}>Movie Details : </div>
            <div className='container w-50 bg-secondary'>
                <div className='text-center text-info p-1'><b style={{ fontSize: "20px" }}>{movie.title}</b></div><hr style={{ color: "white" }}></hr>
                <div className='text-center text-light p-3'><b style={{ fontSize: "15px" }}>{movie.description}</b></div>
                <div><b style={{ fontSize: "15px" }}><StarRating rating={movie.rating} /></b></div>
                <button className='w-100 mt-2' onClick={() => handleBack()}>Back</button>
            </div>
        </>
    )
}

export default MovieDetails