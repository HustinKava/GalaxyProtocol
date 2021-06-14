import React from 'react';
import { Container } from '@material-ui/core';
import '../../Styles/Newsletter.css';

const Newsletter = () => {
    return (
        <div className='newsBackground'>
            <div className='box'>
                <span className='newsHeader'>MONTHLY</span>
                <br/>
                <span className='newsText'>NEWSLETTER</span>
                <div className='vspace'/>
                <div className='formCenter'>
                    <form>
                        <input type="email" id="email" name="email" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter your email"/>
                        <div className='hspace'/>
                        <input type="submit" id='subscribe' value="Submit"/>                
                    </form>
                </div>
                <div className='vspace'/>
                <span className='light'>By clicking Subscribe you agree with our</span> <span className='bold'>Terms of Use</span> <span className='light'>&</span> <span className='bold'>Privacy Policy</span>
            </div>
        </div>
    )
};

export default Newsletter;
