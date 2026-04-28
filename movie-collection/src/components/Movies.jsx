import React, { useState } from 'react'
import '../index.css'
import movies from '../data.js'
import StarRating from './StarRating.jsx';

const Movies = () => {
    const [ratingV,setRatingV]=useState();

    const handleChange=(e)=>{
        let value=document.getElementById('ratingId').value;
        if(value!=""){
           if(value<1 || value>5) {
            alert('Enter Rating between 1 & 5')
           }
        }
        setRatingV(value)
    }
    return (
        <>

            <table className="table m-5 w-75">
                <thead>
                    <tr className='table-secondary'>
                        <th scope="col">#</th>
                        <th scope="col">Movie Name</th>
                        <th scope="col">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((U, i) => (
                        <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>
                                <b>{U.title}</b>
                            </td>
                            <td>
                                <StarRating rating={U.rating} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary" style={{marginLeft:"650px"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Movie
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Movie</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                           <input className="form-control" type="text" placeholder="Enter Movie Name" aria-label="default input example"/><br></br>
                           <input className="form-control" type="number" id='ratingId' placeholder="Enter Rating between 1 & 5" max={5} min={1} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleChange}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movies