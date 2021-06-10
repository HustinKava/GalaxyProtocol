import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import JobsHero from '../Components/Jobs/JobsHero';
import JobsGallery from '../Components/Jobs/JobsGallery';

import { Container } from '@material-ui/core';

import '../Styles/JobHero.css';


const Jobs = () => {


    return (
        <div className='background'>
            <Navbar />
            <Container fluid>
                <JobsHero />
                <JobsGallery />

            </Container>
            <div className="space" />
            <Footer />
        </div>
    )
}

export default Jobs
