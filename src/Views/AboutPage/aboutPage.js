/* eslint-disable no-unused-vars */
import React from 'react'
import ImageSection from '../../components/ImageSection'
import ServicesSection from '../../components/ServicesSection/ServicesSection'
import SkillsSection from '../../components/SkillsSection'
import Title from '../../components/title/title'
import design from '../../../assets/Images/design.svg'
import frontDev from '../../../assets/Images/fron-end2.png'
import backDev from '../../../assets/Images/back-end.png'

const AboutPage = () => {
  const a = 'a'

  return (
    <div className="AboutPage">
      <Title title="About Me" span="About Me" />
      <ImageSection />
      <Title title="My Skills" span="My Skills" />
      <div className="skills-container">
        <SkillsSection skill="JavaScript" progress="80%" widthp="80%" />
        <SkillsSection skill="React Js" progress="70%" widthp="70%" />
        <SkillsSection skill="Python" progress="90%" widthp="90%" />
        <SkillsSection skill="SQL" progress="70%" widthp="70%" />
        <SkillsSection skill="CSS" progress="80%" widthp="80%" />
        <SkillsSection skill="HTML" progress="100%" widthp="100%" />
        <SkillsSection skill="C#" progress="100%" widthp="100%" />
        <SkillsSection skill="Java" progress="80%" widthp="80%" />
      </div>
      <Title title="Services" span="Services" />
      <div className="services-container">
        <ServicesSection image={design} title="Web Design" />
        <ServicesSection image={frontDev} title="Front-end Dev" />
        <ServicesSection image={backDev} title="Back-end Dev" />
      </div>
    </div>
  )
}

export default AboutPage
