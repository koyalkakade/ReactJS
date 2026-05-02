import React, { useEffect, useState } from 'react'
import '../index.css'
import movies from '../data.js'
import StarRating from './StarRating.jsx';
import { useNavigate } from "react-router-dom";
import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';

const Movies = () => {
    const [moviesInfo1, setmoviesInfo1] = useState([]);
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        let movieName = document.getElementById('movieNmId').value;
        let description = document.getElementById('descriptionId').value;
        let ratingVal = document.getElementById('ratingId').value;

        if (movieName == '') {
            alert('Enter the Movie Name....')
        } else if (description == '') {
            alert('Write the movie description...')
        } else if (ratingVal == '') {
            alert('Rating Us...')
        } else if (ratingVal != "") {
            if (ratingVal < 1 || ratingVal > 5) {
                alert('Enter Rating between 1 & 5')
            } else {

                const movieId = Date.now();
                console.log('movieId', movieId);

                const moviesDetail = {
                    id: movieId,
                    title: movieName,
                    rating: ratingVal,
                    description: description
                }

                const currentMovies = JSON.parse(localStorage.getItem("MovieInfo") || "[]");
                console.log('currentMovies', currentMovies)
                const updatedMovie = [...currentMovies, moviesDetail];
                localStorage.setItem("MovieInfo", JSON.stringify(updatedMovie));

                // localStorage.setItem('MovieInfo', JSON.stringify(moviesDetail))

                document.getElementById('movieNmId').value = '';
                document.getElementById('descriptionId').value = '';
                document.getElementById('ratingId').value = '';

                //                 const modalElement = document.getElementById('exampleModal');
                // const modal = Modal.getInstance(modalElement);
                // modal.hide();
                // const modalElement = document.getElementById('exampleModal');
                // const modalInstance = bootstrap.Modal.getInstance(modalElement);
                // modalInstance.hide();
                fetchData()
                //navigate(`/`);
            }
        }

    }

    function fetchData() {
        const getFromLocal = JSON.parse(localStorage.getItem("MovieInfo") || "[]")
        console.log('getFromLocal', getFromLocal)
        const mergedArr = [...movies, ...getFromLocal]
        console.log(mergedArr, 'merged')
        setmoviesInfo1(mergedArr)

        console.log('movies', movies)
    }

    console.log('moviesInfo1', moviesInfo1)



    useEffect(() => {
        fetchData()
    }, [])

    const handleRowClick = (m) => {
        console.info(m)
        navigate(`/moreInfo/${m.id}`, { state: { m } });
    };

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
                    {moviesInfo1.map((U, i) => (
                        <tr key={i} onClick={() => handleRowClick(U)}>
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
            <button type="button" className="btn btn-primary" style={{ marginLeft: "650px" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                            <input className="form-control" type="text" id='movieNmId' placeholder="Enter Movie Name" aria-label="default input example" /><br></br>
                            <input className="form-control" type="number" id='ratingId' placeholder="Enter Rating between 1 & 5" max={5} min={1} /><br></br>
                            <textarea className="form-control" id="descriptionId" rows="3" placeholder='Description'></textarea>                        </div>
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