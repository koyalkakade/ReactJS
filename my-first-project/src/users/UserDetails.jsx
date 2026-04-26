import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import PageNotFound from './PageNotFound'
import { useNavigate } from "react-router-dom";

const UserDetails1 = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;
    const navigate = useNavigate()

    const handleRowClick = (user) => {
        // Navigate to another component/page
        //navigate(`/moreInfo/${userId}`);
        // Navigate to a detail page, passing the user’s id
        console.info(user)
    navigate(`/moreInfo/${user.id.name}`, { state: { user } });
    };
    async function getUsersData() {
        try {
            const res = await fetch("https://randomuser.me/api/?results=20")
            // console.log(res)
            if (!res.ok) {
                setError(true)
                setLoading(false)
            }
            const data = await res.json()
            setUsers(data.results)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setError(true)
            setLoading(false)
        }
    }

    useEffect(() => {
        getUsersData()
    }, [])

    if (loading) return <Loading />
    if (error) return <PageNotFound />



    const totalPages = Math.ceil(users.length / rowsPerPage);
    const changePage = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedData = users.slice(startIndex, startIndex + rowsPerPage);
    return (
        <>
            <div>UserDetails</div>
            <table className="table table-danger table-striped">
                <thead>
                    <tr className='table-danger'>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Email </th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((U, i) => (
                        <tr className='table-danger' key={i} onClick={() => handleRowClick(U)}>
                            <th scope="row">{startIndex + i + 1}</th>
                            <td style={{ textAlign: "left" }}>
                                <img src={U.picture.medium} alt="not shown" className="rounded-circle me-2" />
                                <b>{U.name.title} {U.name.first} {U.name.last}</b>
                            </td>
                            <td style={{ textAlign: "left", alignItems: "center" }}>
                                <b> {U.location.city}</b>
                                <span>{U.location.state}</span>
                                <code>{U.location.postcode}</code>
                            </td>
                            <td style={{ textAlign: "left" }}><i>{U.email}</i></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/*------------pegination code--------------------- */}
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-end">
                    {/* Previous button */}
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button
                            className="page-link"
                            onClick={() => changePage(currentPage - 1)}
                        >
                            Previous
                        </button>
                    </li>

                    {/* Page numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <li
                            key={page}
                            className={`page-item ${page === currentPage ? "active" : ""}`}
                        >
                            <button className="page-link" onClick={() => changePage(page)}>
                                {page}
                            </button>
                        </li>
                    ))}

                    {/* Next button */}
                    <li
                        className={`page-item ${currentPage === totalPages ? "disabled" : ""
                            }`}
                    >
                        <button
                            className="page-link"
                            onClick={() => changePage(currentPage + 1)}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )

}


export default UserDetails1