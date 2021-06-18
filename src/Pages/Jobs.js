import Footer from '../Components/Footer';
import JobsHero from '../Components/Jobs/JobsHero';
import JobsGallery from '../Components/Jobs/JobsGallery';

const Jobs = () => {
  return (
    <div>
      <div className="mainContainer">
        <JobsHero />
        <JobsGallery />
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
