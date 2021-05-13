import React from 'react'
import emailjs from 'emailjs-com'
import swal from 'sweetalert'

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('gmail', 'template_portfolio', e.target, 'user_aNUbdd0QGqrUDGw4JVa9y')
      .then(
        swal({
          title: 'Great!',
          text: 'I will be texting you soon to start working.',
          icon: 'success',
        }),
      )
    e.target.reset()
  }

  return (
    <div className="ContactForm">
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input type="text" className="form-control" placeholder="Name" name="name" />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="email" className="form-control" placeholder="Email Address" name="email" />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="text" className="form-control" placeholder="Subject" name="subject" />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" />
            </div>
            <div className="col-8 pt-3 mx-auto">
              <button type="submit" className="btn btn-info">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
