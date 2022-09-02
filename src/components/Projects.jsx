
export default function Projects() {
  return (
      <section className="projects">
        <div className="content">
          <h2>Projects</h2>
          <p>
            My projects will go here should be a scroll to get to them
          </p>
          <article>
            <h3>Flight Tracker</h3>
            <h4>
              Airline flight tracker to view current status of an upcoming flight
            </h4>
            <ul className="project-details article-list">
              <li>Built using Express.js server framework for API calls</li>
              <li>Generated UI using React</li>
              <li>Utilized Redux for global state management</li>
            </ul>
            <img src={require("../assets/photos/flight-tracker-image.png")} alt="Flight Tracker Landing page" />
          </article>
        </div>
      </section>
  )
}
