import React from 'react'
import './Achievements.css'

const Achievements = ({ Honours }) => {
    return (
        <>
            <h3 className='text-center bg-secondary text-warning py-3 my-2'>Honours</h3>
            <ul className="list-group list-group-flush">
                {
                    Honours.map((str, index) => (
                        <li className="list-group-item achievementList" key={index}>{str}</li>
                    ))
                }
            </ul>


        </>
    )
}

export default Achievements