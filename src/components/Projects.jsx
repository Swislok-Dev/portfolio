export default function Projects() {
  return (
    <section className="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="content">
        <article class="project article">
          <h3>Flight Tracker</h3>
          <h4 className="project-description">
            Airline flight tracker to view current status of an upcoming flight
          </h4>
          <span>Built using:</span>
          <ul className="project-details article-list">
            <li>Express.js server framework for API calls</li>
            <li>Generated UI using React</li>
            <li>Utilized Redux for global state management</li>
          </ul>
          <img
            src={require("../assets/photos/flight-tracker-image.png")}
            alt="Flight Tracker Landing page"
            class="project-image"
          />
        </article>
        <article className="project article">
          <h3>Guitar Picks</h3>
          <h4 className="project-description">
            Allows users to submit pictures of guitars
          </h4>
          <span>Built using:</span>
          <ul className="project-details article-list">
            <li>JavaScript frontend</li>
            <li>Ruby login validations</li>
            <li>Rails API</li>
            <li>PostgreSQL</li>
          </ul>
          <img
            src={require("../assets/photos/guitar-picks-image.png")}
            alt="guitar-picks logo"
            className="project-image"
          />
        </article>
      </div>
    </section>
  )
}
