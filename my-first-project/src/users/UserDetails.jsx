import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import PageNotFound from './PageNotFound'

const UserDetails1 = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

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

    return (
        <>
            <div>UserDetails</div>
            <table class="table table-danger table-striped">
                <thead>
                    <tr className='table-danger'>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Email </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((U, i) => (
                        <tr className='table-danger' key={i}>
                            <th scope="row">{i+1}</th>
                            <td>
                                <img src={U.picture.medium}  alt="not shown" class="rounded-circle"/>
                                <b>{U.name.title} {U.name.first} {U.name.last}</b>
                            </td>
                            <td>
                               <b> {U.location.city}</b> 
                               <span>{U.location.state}</span>
                               <code>{U.location.postcode}</code>
                            </td>
                            <td><i>{U.email}</i></td>
                        </tr>
                    ))}



                </tbody>
            </table>
        </>
    )
}

export default UserDetails1