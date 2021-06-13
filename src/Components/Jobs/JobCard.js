import React from 'react';
// import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Link } from '@material-ui/core'

import '../../Styles/JobCard.css';


function JobCard() {

    return (
        <Card className='mainCard'>
            <div className='postingType'>
                <p className='postingTypeText'>Remote</p>
            </div>
            <CardContent>
                <h2 className='jobTitle'>Job title here</h2>
                <p className='jobDesc'>We’re in search of a marketing specialist to join our team! In this role, you’ll deliver impactful storytelling across various digital platforms.</p>
            </CardContent>

            <CardActions>
                <div className='learnMore'>
                    <Link href='/positionDetails' className="linkLearn">
                        <p className="learnMoreInner">
                            Learn more
                        </p>
                    </Link>
                </div>
            </CardActions>
        </Card>
    )
}

export default JobCard;