import React from 'react';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    mainCard: {
        width: '100%',
        height: '103%',
        background: 'linear-gradient(308deg, #000000 0%, #171717 100%) 0% 0%',
        boxShadow: '0px 0px 20px #000000CB',
        opacity: 1

    },
    postingType: {
        width: 91,
        height: 33,
        background: 'transparent linear-gradient(67deg, #00CDD5 0%, #00CDD5 47%, #F60AFF 100%, #000000 100%) 0% 0% no-repeat padding-box',
        borderRadius: 4,
        opacity: 1,
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
        justifyContent: 'center',
        // This doesn't seem to be working properly
        fontFamily: 'Mosk-500'
    },
    jobTitle: {
        fontSize: 58,
        fontFamily: 'Mosk-600',
        color: 'white',
    },
    jobDesc: {
        color: 'white',
        fontFamily: 'Mosk-200',
        fontSize: 23
    },
    learnMore: {
        background: '#292929',
        color: '#ffffff',
        borderRadius: 4,
        height: 41,
        width: 184,
        fontFamily: 'Mosk-500',
        textTransform: 'none',
        fontSize: 22
    }
});


function JobCard() {

    const classes = useStyles();

    return (
        <Card className={classes.mainCard}>
            <div className={classes.postingType}>
                <p >Remote</p>
            </div>
            <CardContent>
                <h2 className={classes.jobTitle}>Job title here</h2>
                <p className={classes.jobDesc}>We’re in search of a marketing specialist to join our team! In this role, you’ll deliver impactful storytelling across various digital platforms.</p>
            </CardContent>

            <CardActions>
                <Button className={classes.learnMore} href="">Learn more</Button>
            </CardActions>
        </Card>
    )
}

export default JobCard;