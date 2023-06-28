import '../css/Skils.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import html from '../assets/html.png';
import css from '../assets/css.svg';
import js from '../assets/js.png';
import react from '../assets/react.svg';
import android from '../assets/android.png';
import bootstrap from '../assets/bootstrap.png';
import vue from '../assets/vue.png';
import php from '../assets/php.svg';
import java from '../assets/java.png';
import python from '../assets/python.png';
import laravel from '../assets/laravel.png';
import mysql from '../assets/mysql.png';
import postgresql from '../assets/postgresql.png';

function Skils () {
    return (
        <div className="skils" id='skils'>
            <h1>Habilidades</h1>
            <div className="skils-container">
                <h2>Frontend</h2>
                <Container>
                    <Row>
                        <Col>
                            <img src={html} alt="html" />
                            <h3>HTML</h3>                            
                        </Col>
                        <Col>
                            <img src={css} alt="css" />
                            <h3>CSS</h3>
                        </Col>
                        <Col>
                            <img src={js} alt="js" />
                            <h3>JavaScript</h3>
                        </Col>
                        <Col>
                            <img src={react} alt="react" />
                            <h3>React</h3>                            
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={vue} alt="vue" />
                            <h3>Vue</h3>
                        </Col>
                        <Col>
                            <img src={android} alt="android" />
                            <h3>Android Studio</h3>
                        </Col>
                        <Col>
                            <img src={bootstrap} alt="bootstrap" />
                            <h3>Bootstrap</h3>
                        </Col>
                    </Row>
                </Container>
                <h2>Backend</h2>
                <Container>
                    <Row>
                        <Col>
                            <img src={php} alt="php" />
                            <h3>PHP</h3>                            
                        </Col>
                        <Col>
                            <img src={java} alt="java" />
                            <h3>Java</h3>
                        </Col>
                        <Col>
                            <img src={python} alt="python" />
                            <h3>Python</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={laravel} alt="laravel" />
                            <h3>Laravel</h3>                            
                        </Col>
                        <Col>
                            <img src={mysql} alt="mysql" />
                            <h3>MySQL</h3>
                        </Col>
                        <Col>
                            <img src={postgresql} alt="postgresql" />
                            <h3>PostgreSQL</h3>
                        </Col>
                    </Row>
                </Container>          
            </div>
        </div>
    )

}

export default Skils;