import '../css/About.css'

function About () {
    return (
        <section id="about" className='about'>
            <div className="section-header">
                <p className="section-label">01. Sobre mí</p>
                <h2 className="section-title">Quién soy</h2>
                <div className="section-divider"></div>
            </div>
            <div className="about-content">
                <p>
                    Soy un programador <strong>fullstack</strong> apasionado y comprometido con el desarrollo
                    de soluciones innovadoras. Con experiencia tanto en el <strong>front-end</strong> como en
                    el <strong>back-end</strong>, disfruto creando experiencias digitales de calidad que impactan
                    a los usuarios. Estoy emocionado por desafiar los límites y colaborar en proyectos inspiradores.
                </p>
                <div className="about-badges">
                    <span className="badge-item">Frontend</span>
                    <span className="badge-item">Backend</span>
                    <span className="badge-item">Bases de datos</span>
                    <span className="badge-item">Móvil</span>
                </div>
            </div>
        </section>
    )
}

export default About;