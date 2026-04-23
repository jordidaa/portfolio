import '../css/Contact.css'
import gitHub from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

function Contact () {
    return (
        <footer id='contact' className="contact">
            <div className="section-header">
                <p className="section-label">04. Hablemos</p>
                <h2 className="section-title">Contacto</h2>
                <div className="section-divider"></div>
            </div>
            <p className="contact-subtitle">¿Tienes un proyecto en mente? Estoy disponible para colaborar.</p>
            <div className="contact-grid">
                <div className="contact-item">
                    <span className="contact-label">Email</span>
                    <a href="mailto:jordidaa@gmail.com" className="contact-email">jordidaa@gmail.com</a>
                </div>
                <div className="contact-item">
                    <span className="contact-label">Redes profesionales</span>
                    <div className="social-links">
                        <a href="https://github.com/jordidaa" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
                            <img src={gitHub} alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/jordi-dueñas-algarrada" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                    </div>
                </div>
            </div>
            <p className="contact-footer">© {new Date().getFullYear()} Jordi Dueñas Algarrada</p>
        </footer>
    )
}

export default Contact;