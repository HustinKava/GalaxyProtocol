import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import { Container, Grid } from '@material-ui/core';

const FAQ = () => {
    return (
        <div>
            <Navbar />
            <Container fluid>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <h1>FAQ</h1>
                        <h2>Most frequently asked questions</h2>
                        <p>If you can't find the answer you were looking for we encourage you to join out <strong>Telegram</strong> or <strong>Discord channel</strong> to get the support you seek</p>
                    </Grid>
                    <Grid item xs={12}>
                        <h3>What is Galaxy Protocol?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </Grid>
                    <Grid item xs={12}>
                        <h3>What products do we offer?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </Grid>
                    <Grid container justify="flex-end">
                        <Grid item xs={11} >
                            <h4>Galaxyswap</h4>
                            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                        </Grid>

                        <Grid item xs={11} >
                            <h4>Galaxystation</h4>
                            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                        </Grid>

                        <Grid item xs={11} >
                            <h4>Nebula Launchpad</h4>
                            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <h3>I get an error everytime I try to trade on Galaxyswap, why is this?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </Grid>
                    <Grid item xs={12}>
                        <h3>How are prices determined?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </Grid>
                    <Grid item xs={12}>
                        <h3>How come prices are different on other exchanges?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </Grid>

                </Grid>
            </Container>
            <Footer />
        </div>
    )
}

export default FAQ
