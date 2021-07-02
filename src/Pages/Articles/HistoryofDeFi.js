import ArticleTemplate from '../../Components/Articles/ArticleTemplate';
// Progress bar
import getProgress from '../../Components/ProgressBar/getProgress';


const DLTandBlockchain = () => {

    let content = {
        title: 'History of DeFi',
        body: [
            {
                subtitle: '',
                paraContent: ['Bitcoin, Ethereum, and other cryptocurrencies that came to the industry quite early and are currently at the very top did so by offering users an opportunity to trade peer-to-peer (P2P) without the involvement of any third party or central authority. Cryptocurrencies are decentralized, and they are issued as well as stored throughout decentralized methods. This led to users, well, being able to have full ownership and control of your assets.',

                    'In a bank, the bank controls your money, in blockchains, you control your money, it’s that simple.',

                    'The idea of reproducing traditional financial tools through the usage of the blockchain became the next step in decentralizing the traditional financial system.',

                    'To truly get a grasp of how all of it went down, let’s first take a trip to 2013.'
                ]
            },
            {
                subtitle: 'The Birth of Ethereum',
                paraContent: ['You all know what Ethereum is at this point in time, after all, it has remained in the #2 spot in terms of market capitalization for years, and it brought a lot more functionality to the table through its smart contracts than Bitcoin ever did.',

                    'However, Bitcoin laid out the foundation, and showcased that cryptocurrencies could prosper, so by the time 2013 rolled in, it was bound to have some competition.',

                    'In 2013, we have Vitalik Buterin, who announced the Ethereum Project in a whitepaper known as “A Next-Generation Smart Contract & Decentralized Application Platform”. Rolls right off the tongue, doesn’t it?',

                    'In 2013, we have Vitalik Buterin, who announced the Ethereum Project in a whitepaper known as “A Next-Generation Smart Contract & Decentralized Application Platform”. Rolls right off the tongue, doesn’t it?',

                    'And on July 30, 2015, the cryptocurrency world completely changed when the Ethereum blockchain launched. This occurred a year after it was crowdfunded through a sale of over [50 million ETH for a total of 31,500 BTC](https://coinrivet.com/guides/cryptocurrencies/a-brief-history-of-ethereum/).',

                    'And on July 30, 2015, the cryptocurrency world completely changed when the Ethereum blockchain launched. This occurred a year after it was crowdfunded through a sale of over 50 million ETH for a total of 31,500 BTC.',

                    'Voilà! Trustless computing now exists and sets the groundwork for the creation and release of decentralized applications, otherwise referred to as dApps for short.'
                ]
            },
            {
                subtitle: 'Decentralized Exchanges Followed',
                paraContent: [
                    'Let’s now move through time to 2016, specifically, April 30th, where a decentralized autonomous organization known as “The DAO” launched a token sale on Ethereum.',

                    'The unique aspect of it was the fact that it was designed to operate as a community-run investment fund. It raised more than 11.5 million ETH, which at the time were worth $150 million, and laid down the groundwork for all future DAOs that would come after it. Unfortunately, it was exploited and, well, fell.',

                    'Its fall gave birth to what we know today as the [Ethereum Classic](https://ethereumclassic.org/), which was the result of a hard fork. A hard fork occurs when a radical change to the protocol of a blockchain network occurs and results in two branches. One branch follows the previous protocol, and the other follows the new version.',

                    'So, later that year, we saw the launch of OasisDEX, which was, at the time, the first decentralized exchange on Ethereum. This was a type of cryptocurrency exchange that allowed for direct peer-to-peer cryptocurrency transactions to take place online securely without the need for an intermediary.',

                    'Moving on to 2017, we saw the Single-Collateral DAI or SCD, which launched on the Ethereum mainnet. If you haven’t noticed by now, Ethereum truly plays one of the biggest roles in the development of DeFi and that cannot be understated. The users of the Dai Stablecoin System which you now know as the Maker Protocol were finally able to generate Dai tokens against ETH Collateral. SCD essentially provided proof of concept for the idea of a fully decentralized stablecoin.'
                ]
            },
            {
                subtitle: 'The Decentralized Finance Expansion',
                paraContent: ['At the start of 2018, well, we can clearly see a lot of dApps launching on Ethereum that attempted, and most of which succeeded, to expand the DeFi ecosystem.',

                    'On September 27, we saw the launch of Compound Finance. It brought innovative features with it and put them in the mainstream such as borrowing one digital asset against another that is locked as collateral, charging variable fees, and offering rewards to liquidity providers based on the supply as well as the demand.',

                    'Then on November 2, we saw the launch of the Uniswap exchange, which popularized Automated Market Maker (AMM) models for DEXs in the cryptocurrency space. This was done through the usage of liquidity pools as well as algorithms that set trading prices instead of the order books that were used previously by centralized exchanges. Uniswap simply destroyed the competition here.',

                    'Moving on to 2019, in November specifically, we saw the launch of Multi-Collateral DAI or MCD. This enabled anyone to generate Dai against any digital asset in the Maker Protocol’s portfolio.',

                    'Why was this important? Well, it set the foundation for the Maker Foundation to accelerate their work to a dissolution.',

                    'And here we are, in 2021, where the total value locked in DeFi is [$55.59](https://defipulse.com/) billion. There are countless different DeFi dApps being developed on a regular basis, trying to solve many of its varying issues, and it has become truly a platform of innovation.',

                    'And here we are, in 2021, where the total value locked in DeFi is [$55.59](https://defipulse.com/) billion. There are countless different DeFi dApps being developed on a regular basis, trying to solve many of its varying issues, and it has become truly a platform of innovation.'
                ]
            }
        ]
    }

    return (
        <div>
            <div className="mainContainer">
                <ArticleTemplate
                    heroImage={'https://via.placeholder.com/1333x620'}
                    title={content.title}
                    body={content.body}
                />
            </div>
        </div>
    );
};

export default getProgress(DLTandBlockchain);
