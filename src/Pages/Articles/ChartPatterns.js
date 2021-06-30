import ArticleTemplate from '../../Components/Articles/ArticleTemplate';
// Progress bar
import getProgress from '../../Components/ProgressBar/getProgress';


const ChartPatterns = () => {

    let content = {
        heroImage: '',
        title: 'Chart Patterns',
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

export default getProgress(ChartPatterns);
