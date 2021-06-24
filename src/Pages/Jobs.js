import JobsHero from '../Components/Jobs/JobsHero';
import JobsGallery from '../Components/Jobs/JobsGallery';

const Jobs = () => {
  return (
    <div>
      <div className="mainContainer">
        <JobsHero />
        <JobsGallery />
      </div>
    </div>
  );
};

export default Jobs;
