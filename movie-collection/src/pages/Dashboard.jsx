import React from 'react'
import Navbar from '../components/Navbar.jsx';
import Movies from '../components/Movies.jsx';
import Footer from '../components/Footer.jsx';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid alignItems-center">
                <div className="row">
                    <div className="col-2"><h3 className='m-2'>Movies:</h3></div>
                    <div className="col-10" style={{height:"450px"}}>
                        <Movies />
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Dashboard