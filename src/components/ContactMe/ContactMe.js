import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Particle from "../Particle";
import { useForm, ValidationError } from '@formspree/react'; // Import Formspree useForm hook

function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Integrate Formspree useForm hook
    const [formState, handleSubmit] = useForm("xeqylryp"); // Replace "yourFormspreeID" with your actual Formspree form ID

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Modify the original handleSubmit function to also check for Formspree submission state
    const handleFormSubmit = (e) => {
        handleSubmit(e).then(() => {
            if (formState.succeeded) {
                alert('Your message has been sent!'); // Keep your alert message here
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            }
        });
    };

    return (
        <Container fluid className="contact-section">
            <Particle />
            <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                <h1 className="project-heading">
                    Contact <strong className="purple">Me</strong>
                </h1>
                {/* Modify the Form's onSubmit to use handleFormSubmit */}
                <Form onSubmit={handleFormSubmit}>
                    {/* Name input remains the same, Formspree doesn't need to capture this */}
                    <Form.Group controlId="formBasicName" className="mb-3" style={{marginTop: "70px"}}>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    {/* Email input */}
                    <Form.Group controlId="formBasicEmail" className="mb-3" style={{marginTop: "70px"}}>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <ValidationError prefix="Email" field="email" errors={formState.errors} />
                    </Form.Group>

                    {/* Message textarea */}
                    <Form.Group controlId="formBasicMessage" className="mb-3" style={{marginTop: "70px"}}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter your message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <ValidationError prefix="Message" field="message" errors={formState.errors} />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="btn-primary purple mt-custom" style={{marginBottom: "100px", marginTop: "50px"}} disabled={formState.submitting}>
                        Submit
                    </Button>
                </Form>
                </Col>
            </Row>
            </Container>
        </Container>
    );
}

export default ContactMe;
