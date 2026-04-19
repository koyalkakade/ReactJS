import React from 'react'
import FilmfareAwardsArray from '../data.jsx'

const FilmfareAwards = () => {
    // console.log(FilmfareAwardsArray)
    return (
        <>
            <h3 className='text-center bg-secondary text-warning py-3 my-2'>FilmfareAwards</h3>

            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Year</th>
                        <th scope="col">Category</th>
                        <th scope="col">Song</th>
                        <th scope="col">Result</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        FilmfareAwardsArray.map((filmFare, i) => (
                            <tr key={filmFare.id}>
                                <th scope="row">{i+1}</th>
                                <td>{filmFare.Year}</td>
                                <td>{filmFare.Category}</td>
                                <td>{filmFare.Song}</td>
                                <td>{filmFare.Result}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>


        </>
    )
}

export default FilmfareAwards