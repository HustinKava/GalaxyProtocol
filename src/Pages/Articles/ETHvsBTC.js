import ArticleTemplate from '../../Components/Articles/ArticleTemplate';
// Progress bar
import getProgress from '../../Components/ProgressBar/getProgress';

import ETCHvsBTCHero from '../../Assets/GP-ETHvsBTC.png'
const ETHvsBTC = () => {

    let content = {
        heroImage: ETCHvsBTCHero,
        title: 'ETH vs BTC',
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

export default getProgress(ETHvsBTC);
