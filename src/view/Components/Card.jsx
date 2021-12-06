import React from 'react';
import emailjs from 'emailjs-com';


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_de7nfoq', 'template_lorp77d', e.target, 'user_RZvrmGWIc4vXN1wxcqnsD')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="container-fluid">
        <div className="row">
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="from_name" />
                <label>Email</label>
                <input type="email" name="from_email" />
                <label>Subject</label>
                <input type="text" name="subject" />
                <label>Message</label>
                <textarea name="html_message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    </div>
  );
}