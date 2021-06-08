import React from 'react';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: 744.05,
        height: 474.21,
        background: 'linear-gradient(308deg, #000000 0%, #171717 100%) 0% 0%',
        boxShadow: '0px 0px 20px #000000CB',
        opacity: 1

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


function JobCard() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div>
                <p>Remote</p>
            </div>
            <CardContent>
                <h2>Job title here</h2>
                <p>We’re in search of a marketing specialist to join our team! In this role, you’ll deliver impactful storytelling across various digital platforms.</p>
            </CardContent>

            <CardActions>
                <Button>Learn more</Button>
            </CardActions>
        </Card>
    )
}

export default JobCard;