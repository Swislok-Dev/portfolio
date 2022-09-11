import React from 'react'
import SkillItem from "./skill/SkillItem"

function Skills() {
  return (
    <section className="skills">
      <h2>What I can do</h2>
      <ul className='skills-list'>
      <SkillItem skillName="JavaScript"/>
      <SkillItem skillName="React"/>
      <SkillItem skillName="Ruby"/>
      <SkillItem skillName="Ruby on Rails"/>
      <SkillItem skillName="MongoDB"/>
      <SkillItem skillName="PostgreSQL"/>

      </ul>
    </section>
  )
}

export default Skills
