/* eslint-disable no-unused-vars */
import React from 'react'
import ContactItem from '../../components/ContactItem/ContactItem'
import phone from '../../../assets/Images/phone.svg'
import email from '../../../assets/Images/emailme.svg'
import location from '../../../assets/Images/location.svg'
import Title from '../../components/title/title'

const Contact = () => {
  const a = 3

  return (
    <div>
      <div className="ContactTitle">
        <Title title="Contact" span="Contact" />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1930.2731709595655!2d-90.5516003!3d14.6249001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a06b52d8e94d%3A0x6f35669c0a1a8a83!2sCentro%20Comercial%20Econocentro!5e0!3m2!1ses-419!2sgt!4v1620839360745!5m2!1ses-419!2sgt" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" />
        </div>
        <div className="contact-sect">
          <ContactItem title="Phone" icon={phone} text1="+502 30171493" />
          <ContactItem title="Email" icon={email} text1="raulangelj@gmail.com" text2="raulangel51@hotmail.com" />
          <ContactItem title="Address" icon={location} text1="13 street, zone 7." text2="Guatemala City." />
        </div>
      </div>
    </div>
  )
}

export default Contact
