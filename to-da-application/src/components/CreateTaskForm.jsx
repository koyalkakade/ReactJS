import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateTaskForm = () => {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [tasks, setTasks] = useState([])
    const navigate = useNavigate()

    function handleFormSubmit(e) {
        e.preventDefault()
        const newTask = {
            title: title,
            description: description,
            id: Date.now(),
            date: Date.now(),
            isCompleted: 'false'
        }
        // tasks.push(newTask)
        const allTasks = [...tasks, newTask]
        localStorage.setItem("B81TaSK", JSON.stringify(allTasks))
        navigate('/')
    }


    useEffect(() => {
        const getTFromLocal = JSON.parse(localStorage.getItem('B81TaSK'))
        setTasks(getTFromLocal)
    }, [])

    return (
        <>
            <h4 className='text-secondary text-center'>Add new task details</h4>
            <div className="container w-50" style={{height:"500px"}}>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputtitle" className="form-label">Title</label>
                        <input type="text" className="form-control" id="exampleInputtitle"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputDesci" className="form-label">Description</label>
                        <input type="text" className="form-control" id="exampleInputDesci"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default CreateTaskForm