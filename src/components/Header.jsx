import '../css/Header.css';
import headerImg from '../assets/header.jpg';

function Header () {
    return (
        <div className="header">
            <img src={headerImg} alt="Jordi Dueñas Algarrada" />
            <div className="header-overlay"></div>
            <div className="header-content">
                <p className="header-tag">Bienvenido a mi portfolio</p>
                <h1>Jordi Dueñas Algarrada</h1>
                <h2>Programador <span className="accent-text">FullStack</span></h2>
                <div className="header-cta-group">
                    <a href="#projects" className="btn-primary-cta">Ver proyectos</a>
                    <a href="#contact" className="btn-secondary-cta">Contáctame</a>
                </div>
            </div>
            <a href="#about" className="scroll-indicator" aria-label="Ir a sobre mí">
                <span className="scroll-arrow"></span>
            </a>
        </div>
    )
}

export default Header;