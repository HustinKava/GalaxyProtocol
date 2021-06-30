import ArticleTemplate from '../../Components/Articles/ArticleTemplate';
// Progress bar
import getProgress from '../../Components/ProgressBar/getProgress';
 

const ImpermanentLoss = () => {

    let content = {
        heroImage: '',
        title: 'Impermanent Loss',
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

export default getProgress(ImpermanentLoss);
