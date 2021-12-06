import React from 'react';
import emailjs from 'emailjs-com';

function EmailTemplate(props) {

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
        <div className="container">
            <div className="row">
                <form onSubmit={sendEmail}>
                    <div className="form-group col-md-4">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" name="to_name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
                        <input type="hidden" name="from_name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label className="text-left" htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="exampleInputEmail1">You Message</label>
                        <input type="textarea" name="message" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter message"/>
                    </div>
                    <div className="col-md-4">
                        <button type="submit" value="Send" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EmailTemplate;