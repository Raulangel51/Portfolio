/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const SkillsSection = ({ skill, progress, widthp }) => {
  const a = 9

  return (
    <div className="SkillsSection">
      <div className="skill-container">
        <h5 className="skill-title">{skill}</h5>
        <div className="skill-bar">
          <p className="skill-text">{progress}</p>
          <div className="skill-progress">
            <div className="progress">
              <div className="inner-progress" style={{ width: widthp }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsSection
