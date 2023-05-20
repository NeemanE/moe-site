import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { FaPhone } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs
            .sendForm(
                'YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',
                event.target,
                'YOUR_USER_ID'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    // Perform success action if needed
                },
                (error) => {
                    console.log(error.text);
                    // Perform error action if needed
                }
            );
    };

    return (
        <section id="contact">
            <div className="contact-blurb">
                <h2>Don't wait any longer</h2>
                <h1>Get your free personal consultation!</h1>
                <h3>Get a free review of all three of your credit reports and scores from a professional credit expert!</h3>
            </div>
            <div className="contact-container">
                <div className="contact-form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={3}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className='form-button'>
                            Send Message
                        </Button>
                    </Form>
                </div>

                <div className="contact-info">
                    <h1>
                        <FaPhone />
                        <br />
                        (877) 644-9145
                    </h1>
                    <h3>Toll Free</h3>
                    <p><span className='bold-span'>Address:</span> 9900 West Park Suite 138, Houston, TX 77063</p>
                    <p><span className='bold-span'>Office Phone:</span> (713) 955-6346</p>
                    <p><span className='bold-span'>Email:</span> Info@protocallfinancial.com</p>
                </div>
            </div>

            <style jsx>{`
            .contact-container {
              display: flex;
            }
    
            .contact-form {
              flex: 1;
              margin: 0 3vw;
            }
    
            .contact-info {
              flex: 1;
              background-color: #39c0ee;
              text-align: center;
              padding-top: 10vh;
            }

            .bold-span {
                font-weight: bold;
            }
          `}</style>
        </section>
    );
};

export default Contact;
