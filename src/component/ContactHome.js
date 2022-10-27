import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactHome = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-details">
              <h6>
                Hey there, welcome to nkvermahoisery :) Get in touch with us to
                know more about our products, order related support, bulk
                inquiries or just to have a chat & we will get back to you soon
                !
              </h6>

              <h5>
                <span>Goutam Verma (Manager)</span>
              </h5>
              <h5>
                {' '}
                <span>Customer Support Number :</span> +91 88002 07858
              </h5>
              <h5>
                {' '}
                <span>Support Email Address :</span>{' '}
                info@nkvermahoisery@gmail.com
              </h5>
              <h5>
                {' '}
                <span>Timings :</span> 10:00 AM to 10:00 PM
              </h5>
              <h5>
                {' '}
                <span>Head Office : </span> M-91, Street no 6, Shastri Nagar,
                New Delhi 110052
              </h5>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <Form
              action="https://formspree.io/f/xvoyaown"
              method="post"
              className="form-section"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <h3 className="mb-4">Inquiry For Business</h3>
              <Form.Group controlId="validationCustom01">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="user-name"
                  id="user-name"
                  className="form-control my-2 "
                  autoComplete="off"
                  placeholder="Enter your Name"
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a Name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="validationCustom02">
                <label className="label">Mobile Number</label>
                <input
                  type="text"
                  name="user-phone"
                  id="user-phone"
                  className="form-control my-2 "
                  autoComplete="off"
                  maxLength="10"
                  placeholder="+91-9899xxxxx28"
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a phone number.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="validationCustom03">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="user-email"
                  id="user-email"
                  className="form-control w-100 my-2 "
                  autoComplete="off"
                  placeholder="example123@gmail.com"
                  required
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="validationCustom03">
                <label className="label">Message</label>
                <textarea
                  type="text"
                  name="user-message"
                  id="user-message"
                  className="form-control w-100  my-2"
                  autoComplete="off"
                  placeholder="enter your email"
                  required
                ></textarea>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a Message.
                </Form.Control.Feedback>
              </Form.Group>

              <div>
                <Button type="submit" className=" btn btn-primary mt-3 con-btn">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            <iframe
              title="This is a unique title"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437.57086069056794!2d77.17259122113512!3d28.67268439999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfde11336e01f%3A0x6ac799cc7dae491!2sNk%20verma%20Hosiery!5e0!3m2!1sen!2sin!4v1666245873008!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHome;
