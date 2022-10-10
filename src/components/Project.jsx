import React from "react"

const Project = (props) => {
  const { title, description, itemsArray, image } = props

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
    </article>
  )
}

export default Project
