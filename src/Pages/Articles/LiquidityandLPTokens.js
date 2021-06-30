import ArticleTemplate from '../../Components/Articles/ArticleTemplate';
// Progress bar
import getProgress from '../../Components/ProgressBar/getProgress';


const LiquidityandLPTokens = () => {

    let content = {
        heroImage: '',
        title: 'Liquidity & LP Tokens',
        body: [
            {
                subtitle: '',
                paraContent: []
            },
            {
                subtitle: '',
                paraContent: []
            }
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

export default getProgress(LiquidityandLPTokens);
