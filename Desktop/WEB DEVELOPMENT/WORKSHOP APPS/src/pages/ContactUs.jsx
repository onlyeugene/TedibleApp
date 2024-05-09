import React from "react";

import { Form, Button } from "react-bootstrap";

const ContactUs = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, phone, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <div className="container" >
      <div className="text-center">
      <div className="container mt-5 justify-content-center align-items-center">
        
          <h2 className="mb-3">Contact Us</h2>
          <p>
            We Love To Hear From. Please Fill In The information Below To Get In
            Touch With Our Team.
          </p>
       
     
        </div>
        </div>
        <div className="d-flex justify-content-around ">
          <div>
            <h4>Contact Information</h4>
            <p className="uppercase">General enquiring</p>
          </div>
          <div>
            <h4>Send Us A Message</h4>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="Mark Essien" placeholder="Mark Essien" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="markessien@gmail.com"
                  placeholder="markessien@gmail.com"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="09079159545" placeholder="09079159545" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  required
                  placeholder="Hi, do you have moment to talk about..."
                />
              </Form.Group>
              <Button className="btn btn-danger" type="submit">
                {formStatus}
              </Button>
            </Form>
          </div>
        </div>
      
    </div>
  );

};
export default ContactUs;