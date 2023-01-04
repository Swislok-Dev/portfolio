import Project from './Project';

export default function Projects() {
  const flightTrackerItems = [
    'Next.js',
    'Tailwindcss',
    'Typescript',
    'Axios API requests',
  ];
  const flightTrackerDescription =
    'Airline flight tracker to view current status of an upcoming flight';
  const flightTrackerImage = require('../assets/photos/airline-tracker-image(1).jpeg');
  const flightTrackerGithubURL =
    'https://github.com/Swislok-Dev/airline_tracker';
  const flightTrackerLiveURL = 'https://airline-tracker.vercel.app/';

  const guitarPicksItems = [
    'JavaScript frontend',
    'Ruby login validations',
    'Rails API',
    'PostgreSQL',
  ];
  const guitarPicksDescription = 'Allows users to submit pictures of guitars';
  const guitarPicksImage = require('../assets/photos/guitar-picks-image.jpeg');
  const guitarPicksGithubURL = 'https://github.com/Swislok-Dev/Guitar-Picks';
  const guitarPicksLiveURL = 'http://guitar-picks.netlify.app';

  const adphotoItems = ['React', 'Framer-Motion', 'Lazy loaded images'];
  const adphotoDescription =
    'Photographer portfolio, showcasing featured images of photographers work';
  const adphotoImage = require('../assets/photos/adphotography.jpeg');
  const adphotoGithubURL =
    'https://github.com/Swislok-Dev/annadahliaphotography';
  const adphotoLiveURL = 'https://annadahlia.com';

  return (
    <section id="projects" className="projects">
      <div className="content">
        <Project
          title="Flight Tracker"
          description={flightTrackerDescription}
          itemsArray={flightTrackerItems}
          image={flightTrackerImage}
          githubLink={flightTrackerGithubURL}
          liveLink={flightTrackerLiveURL}
        />
        <Project
          title="Guitar Picks"
          description={guitarPicksDescription}
          itemsArray={guitarPicksItems}
          image={guitarPicksImage}
          githubLink={guitarPicksGithubURL}
          liveLink={guitarPicksLiveURL}
        />
        <Project
          title="Anna Dahlia Photography"
          description={adphotoDescription}
          itemsArray={adphotoItems}
          image={adphotoImage}
          githubLink={adphotoGithubURL}
          liveLink={adphotoLiveURL}
        />
      </div>
    </section>
  );
}
