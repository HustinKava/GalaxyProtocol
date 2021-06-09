import React from 'react';
import { Container } from '@material-ui/core';
import '../../Styles/Newsletter.css';

const Newsletter = () => {
    return (
        <Container maxWidth="md">
            <div className='box'>
                <span className='newsHeader'>MONTHLY</span>
                <br/>
                <span className='newsText'>NEWSLETTER</span>
                <form>
                    <input type="email" id="email" name="email" placeholder="Enter your email"/>
                    <input type="submit" id='subscribe' value="Submit"/>                
                </form>
            </div>
        </Container>
    )
};

export default Newsletter;
