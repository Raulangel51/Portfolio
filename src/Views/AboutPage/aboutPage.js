/* eslint-disable no-unused-vars */
import React from 'react'
import ImageSection from '../../components/ImageSection'
import Title from '../../components/title/title'

const AboutPage = () => {
  const a = 'a'

  return (
    <div className="AboutPage">
      <Title title="About Me" span="About Me" />
      <ImageSection />
      <Title title="My Skills" span="My Skills" />
    </div>
  )
}

export default AboutPage
