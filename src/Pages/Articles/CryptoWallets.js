import ArticleTemplate from '../../Components/Articles/ArticleTemplate';
// Progress bar
import getProgress from '../../Components/ProgressBar/getProgress';
import CryptoWalletsImg from '../../Assets/GP-Farming.png'


const CryptoWallets = () => {

    let content = {
        heroImage: CryptoWalletsImg,
        title: 'Crypto Wallets Explained',
        body: [
            
            {
                subtitle: '',
                paraContent: [
                    'Storing cryptocurrencies in a wallet is easily the most essential step in the process of buying these currencies as your assets are only as secure as your wallet. Before making decisions regarding what token to buy, a user should identify his/her goals to understand what wallet suits best to their use. These goals can be one of the following:',
                    `- Long term holding`,
                    `- Day trading`,
                    `- Swing trading`,
                    `Depending on the trading strategies users can get access to three kinds of wallets:`,
                    `- Hardware wallets`,
                    `- Software wallets`,
                    `- Paper wallets`,
                    `Software-based wallets are also called hot storages while hardware wallets are called cold storages. While software wallets are marginally convenient as compared to a hardware wallet but the latter is considered to be extremely secure. This is due to the fact that the cold storages have no connection to the internet.`
                ]
            },
            {
                subtitle: 'Hardware Wallets:',
                paraContent: [
                    `Hardware wallets may provide a lot of security but this comes with a catch; accessibility. The funds in these wallets are not usually readily accessible and this is why hardware wallets are used for specific use cases. Some web wallets, however, are giving the facilities of integrating hardware wallets to online interfaces which makes the process a bit easier.`,
                    `Long-term traders or “HODLERs” usually sell after long periods of time and hold tokens in large quantities. These tokens require immense security. So, these traders usually store their currencies in cold storage.`,
                    `Paper wallets** are also a subtype of hardware wallets. They are essentially pieces of paper on which private keys and addresses are printed. Due to numerous flaws in the concept, using paper wallets is highly discouraged.`  
                ]
            },
            {
                subtitle: 'Software Wallets:',  
                paraContent: [
                    `These are the most common types of wallets in the crypto space. Software wallets are usually connected to the internet and are very convenient when it comes to accessing funds. These wallets come in all types of shapes. Some of its types are listed below:`,

                    `Web wallets - These wallets can be accessed through any browser. This includes all types of wallets that you can make on exchanges (Eg: Binance, Coinbase, Okex, etc.) as well as other web browser-compatible wallets (Metamask, etc.). Some third-party wallet services manage the private keys for customers, due to which these wallets aren’t considered to be the most secure options when it comes to storing large amounts of funds unless the exchange provides a wide range of security features. An example of secure web wallets is the Coinbase wallet which is deemed secure as the parent company is regulated and is listed publicly.`,

                    `Desktop wallets - These are desktop software that you download in order to store your funds. Desktop wallets allow you to keep full authority over your private keys due to which they are considered to be more secure than web wallets. However, forgetting your password or losing a particular “Wallet.dat” file from your computer would mean losing all your funds to carelessness.`, 

                    `Mobile wallets - As the name implies, these wallets are available as applications on mobile phones. These wallets usually act as mobile counterparts of web wallets. Most exchanges give users the ability to access their wallets through this medium.`,

                    `Software wallets have improved a lot in terms of security and user interface over the years. This has made them the best choice for day and swing traders. You can instantly swap or trade your funds online leveraging the volatility of the market.`, 

                    `Although the increased security of these software wallets is impressive, cold storage is still considered to be the best option when it comes to long-term hodling. So, it is important to understand the pros, cons, and risks associated with all kinds of wallets before actually buying digital assets so that a user can execute his trading or hodling strategy efficiently.` 
                ]
            },
        ]
    }

    return (
        <div>
            <div className="mainContainer">
                <ArticleTemplate
                    heroImage={content.heroImage}
                    title={content.title}
                    body={content.body}
                />
            </div>
        </div>
    );
};

export default getProgress(CryptoWallets);
