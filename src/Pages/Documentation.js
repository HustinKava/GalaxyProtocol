import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import { Container, Grid } from '@material-ui/core';

import '../Styles/Documentation.css';

const Documentation = () => {
    return (
        <div>
            <Navbar />
            <Container fluid className="mainContainer">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                        <h1>DOCUMENTATION</h1>
                        <h2 className="h2Top">GalaxyProtocol </h2>
                        <h2 className="h2Bottom">Ecosystem overview</h2>
                        <p className="bodyCopy">In the immediate aftermath of the 2008 financial crisis, people began to experiment with the idea of whether clearly defined, emotionless technology in a trustless environment could govern finance. </p>

                        <p>Our traditional, fiat banking system, although susceptible to corruption and mismanagement, evolved for a reason. In the west, after the collapse of Rome and prior to the Medici and the Knights Templar, moving funds from location to location was no simple manner and roads were often lawless and dangerous. If funds were being moved without physical protection they were susceptible to attack and theft. This period, between 500-1300 CE is commonly known as the Middle Ages. Modern historians conceptualize this time as sophisticated but the daily reality for the vast majority of people was very different. Roughly 80-90% of the population living in Western Europe during this time period were enslaved, serfs (almost but not quite enslaved) or peasants. Quality of life during the middle ages, by modern standards, was abject poverty.
                                </p>
                        <p>Demand for safe passage and currency exchange allowed various groups throughout the next few hundred years to serve as protectors for funds and goods that ensured safe transport of wealth, eventually evolving over the next millenia into our traditional retail banking systems. The Knights Templar, prior to their dissolution by Papal decree, were tasked, in part, with moving and securing Papal funds across Europe. After their dissolution, the Medici family of Florence, Italy became the dominant gatekeepers for moving and storing wealth for not just the Pope, but also for high ranking families across Europe. As financial services became available for those down the social hierarchy, more productivity and trade could take place. Goods and services could be provided more securely to more ordinary citizens with more entities available to secure the legitimacy and mobility of wealth. This, in turn, enabled the evolution of capitalism and the ability for more people to create more goods and services which would better the lives of all.
                                    </p>
                        <p>this brings us to the late 20th century and the height of retail and central banking in the west. Certain legislation, enabled by western governments, permitted retail banks to create mortgage classes for those with lower credit scores allowing individuals to purchase homes. This in theory was in everyone’s best interest as the thought was that the housing industry, especially in the United States, could never collapse.
                                        </p>
                        <p>It did collapse, due to the fact that those individuals, who had lower credit scores, could not actually pay off their mortgage. This in turn created a massive foreclosure on these homes. The supply outmatched the demand and the collateral assets were worth fractions of their previous worth. The banks, in the meantime, created bonds, or debt securities, where they could swap the ownership of these homes in exchange for excess cash for operations.
                                            </p>
                        <p>This caused a massive problem. Since the banks had too great a supply of homes, due to the sharply increased foreclosure rate, and no income of cash for their other lending operations, many banks, most famously the Lehman Brothers, became insolvent and went bust. Unfortunately, the taxpayer was responsible for the cost of this massive blunder.
                                                </p>
                        <p>So why was blockchain technology created? Satoshi Nakamoto, whoever they are, realized that they could solve the problem of double spend with Distributed Ledger Technology. Distributed Ledger Technology is a fancy phrase for a giant spreadsheet that anyone can see, provided they have access to the server or servers housing the data. The brilliance of blockchain technology is that any computer can become a host server and or access the data. With the use of encryption and Proof of Work algorithms, people could move data, or represented funds, across this network in a frictionless manner. This technology permits people to bypass the traditional banking system and send funds directly from peer to peer without having to go through a third party who may or may not act responsibly with their funds.
                                                    </p>
                        <p>In 2015, Ethereum came along and revolutionized Distributed Ledger Technology by allowing the blockchain network to become the host server for applications. What does this mean? The internet works via what web developers call, calls. The user interacts with an interface, the buttons that they click perform a task that is sent to a server, or calls the server, which performs the task and then returns the result to the user interface. This happens incredibly fast thanks to the creation of cloud computing.
                                                        </p>
                        <p>With the Ethereum Virtual Machine, we are now capable of having decentralized applications, where the blockchain itself acts as a giant, decentralized server.
                                                            </p>
                        <p>2017-2018 brought along what we now identify as the ICO bubble where many companies were creating tokens as a means for early seed funding. The regulators effectively banned ICOs/ITOs, comparing them to IPOs, in order to protect investors from scams.
                                                            </p>
                        <p> We now find ourselves in another bubble of pump and dumps, rug pulls and scams that will likely give regulators ammunition to clamp down on the DeFi ecosystem yet again.</p>
                        <p> Every system, including DeFi, is susceptible to corruption, mismanagement and decay because the human race has the proclivity for greed, betrayal and narcissism as well as for good, benevolence and altruism.
                                                                </p>
                        <p> At GalaxyProtocol, we have asked ourselves if complete decentralization without trust is actually a viable solution for the long term. Hiding behind a wall of anonymity in a completely decentralized, trustless ecosystem causes inherent distrust and permits scammers and thieves to take advantage of those who would like to simply try to earn incredible returns as quickly as possible. The dark side of DeFi can be akin to thieves attacking poor travelers to steal their gold in the European Medieval Age.</p>                                                                 <p> How are we trying to solve this fundamental problem in DeFi? The developers at GalaxyProtocol made the choice to break the wall of anonymity and go through the regulatory hoops in order to create more trust in this trustless ecosystem. We believe in accountability. We see our community as real people, not just wallet addresses. We believe that changing lives and making money together is better than making money on one’s own and certainly better than making money through deception. Everything that we do, we do with honesty and integrity. We own up to our mistakes and shortcomings by listening to our vocal and wonderful community. We would like to achieve greatness for as many people as possible, not just ourselves. Going forward, we will always stay true to our goal of building trust in this trustless ecosystem.</p>
                    </Grid>


                </Grid>
            </Container>
            <Footer />
        </div>
    )
}

export default Documentation
