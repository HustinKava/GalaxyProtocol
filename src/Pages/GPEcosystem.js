import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';

import '../Styles/Gpecosystem.css'

import { Container } from '@material-ui/core';


const Jobs = () => {


    return (
        <div>
            <Navbar />
            <Container fluid className="mainContainer">
            <img src="https://via.placeholder.com/1349x2333"></img>
            </Container>
            <div className="space" />
            <Footer />
        </div>
    )
}

export default Jobs
