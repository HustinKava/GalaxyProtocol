import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import JobsHero from '../Components/Jobs/JobsHero';
import JobCard from '../Components/Jobs/JobCard'

const Jobs = () => {
    return (
        <div className=''>
            <Navbar />
            <JobsHero />
            <h3>Open positions</h3>
            <div>
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
            <Footer />
        </div>
    )
}

export default Jobs
