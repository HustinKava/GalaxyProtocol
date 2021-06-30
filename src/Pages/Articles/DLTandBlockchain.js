import ArticleTemplate from '../../Components/Articles/ArticleTemplate';
// Progress bar
import getProgress from '../../Components/ProgressBar/getProgress';


const DLTandBlockchain = () => {

    let content = {
            title: 'DLT and Blockchain',
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
                    heroImage={''}
                    title={content.title}
                    body={content.body}
                />
            </div>
        </div>
    );
};

export default getProgress(DLTandBlockchain);
