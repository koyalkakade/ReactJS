import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const HomePage = ({ data }) => {
    const [tasks, setTasks] = useState([])

    function saveToLocal(t) {
        localStorage.setItem('B81TaSK', JSON.stringify(t))
    }

    function getFromLocal() {
        return JSON.parse(localStorage.getItem("B81TaSK"))
    }
    async function fetchData() {
        const getDataFromLocal = getFromLocal()
        if (getDataFromLocal) {
            setTasks(getDataFromLocal)
        } else {
            setTasks(data)
            saveToLocal(data)
        }
    }

    const handleDelete = (id) => {
        const tsks = getFromLocal()
        const TASK = tsks.filter((item) => item.id !== id);
        setTasks(TASK)
        saveToLocal(TASK)
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log('tasks...home', tasks)


    return (
        <>
            <div className="container  d-md-flex justify-content-md-end">
                {/* <input type="datetime" onChange={(e) => console.log(e.target.value)} /> */}
                <Link className='btn btn-primary ms-1' to='/create'>Add New Task</Link>
            </div>
            <div className='container' style={{height:"450px"}}>
                <table className="table mt-3">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((t, i) => (
                            <tr key={t.id}>
                                <th scope="row">{i + 1}</th>
                                <td>{t.title}</td>
                                <td>{t.description}</td>
                                <td className={`${t.isCompleted == 'true' ? 'text-success' : 'text-info'}`}>{t.isCompleted == 'true' ? "Completed" : "In progress"}</td>
                                <td>
                                    <Link className='fs-4' to={`/edit/${t.id}`}><FaRegEdit /></Link>
                                    <span className='fs-4' onClick={() => handleDelete(t.id)}><MdOutlineDelete className='text-danger' /></span>
                                    {/* write excute code for delete 

                                add icons for edit delete 

                                and appliaction should look good

                                show calender on one component */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default HomePage