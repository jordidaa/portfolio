import '../css/Contact.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import gitHub from '../assets/github.png';
import linkedin from '../assets/linkedin.png';


function Contact () {
    return (
        <div id='contact' className="contact">
            <h1>Contacto</h1>
            <Container>
                <Row>
                    <Col>
                        <h2>Email</h2>
                        <p>
                            jordidaa@gmail.com
                        </p>
                    </Col>
                    <Col>
                        <h2>Redes Profesionales</h2>
                        <a href="https://github.com/jordidaa" target="_blank" rel="noreferrer"><img src={gitHub} alt="Githib" className='images'/></a>
                        <a href="https://www.linkedin.com/in/jordi-dueñas-algarrada" target="_blank" rel="noreferrer"><img src={linkedin} alt="Linkedin" className='images'/></a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;