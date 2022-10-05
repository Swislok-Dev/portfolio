import Project from "./Project"

export default function Projects() {
  const flightTrackerItems = [
    "Express.js server framework for API calls",
    "Generated UI using React",
    "Utilized Redux for global state management",
  ]
  const flightTrackerDescription =
    "Airline flight tracker to view current status of an upcoming flight"
  const flightTrackerImage = require("../assets/photos/flight-tracker-image.jpeg")

  const guitarPicksItems = [
    "JavaScript frontend",
    "Ruby login validations",
    "Rails API",
    "PostgreSQL",
  ]
  const guitarPicksDescription = "Allows users to submit pictures of guitars"
  const guitarPicksImage = require("../assets/photos/guitar-picks-image.jpeg")

  const adphotoItems = ["React"]
  const adphotoDescription =
    "Photographer portfolio, showcasing featured images of photographers work"
  const adphotoImage = require("../assets/photos/adphotography.jpeg")

  return (
    <section className="projects">
      <div className="content">
        <Project
          title="Flight Tracker"
          description={flightTrackerDescription}
          itemsArray={flightTrackerItems}
          image={flightTrackerImage}
        />
        <Project
          title="Guitar Picks"
          description={guitarPicksDescription}
          itemsArray={guitarPicksItems}
          image={guitarPicksImage}
        />
        <Project
          title="Anna Dahlia Photography"
          description={adphotoDescription}
          itemsArray={adphotoItems}
          image={adphotoImage}
        />
      </div>
    </section>
  )
}
