import React from "react"

const Project = (props) => {
  const { title, description, itemsArray, image, githubLink, liveLink } = props

  return (
    <article className="project article">
      <h3>{title}</h3>
      <h4 className="project-description">{description}</h4>
      <span>Built using:</span>
      <ul className="project-details article-list">
        {itemsArray.map((item, index) => (
          <li key={`${item}${index}`}>{item}</li>
        ))}
      </ul>
      <figure>
        <img src={image} alt={title} className="project-image" />
      </figure>
      <div className="project-links">
        <a href={githubLink} target="_blank" rel="noreferrer">
          <button className="btn source-btn">Source</button>
        </a>

        <a href={liveLink} target="_blank" rel="noreferrer">
          <button className="btn live-btn">Live Site</button>
        </a>
      </div>
    </article>
  )
}

export default Project
