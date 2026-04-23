import '../css/Projects.css'
import github from '../assets/github.png'

function Projects () {
    const projects = [
        {
            title: 'Proyecto de fútbol',
            subtitle: 'JavaFX y SQL',
            tag: 'Java',
            description: 'Aplicación de gestión de fútbol con JavaFX y SQL. Permite administrar equipos y jugadores con una interfaz gráfica intuitiva y base de datos para persistencia de datos.',
            github: 'https://github.com/jordidaa/projecteFutbol'
        },
        {
            title: 'Web de jardinería',
            subtitle: 'HTML, CSS, JavaScript y Bootstrap',
            tag: 'Web',
            description: 'Página web dedicada a la jardinería con información, consejos y recursos del sector. Diseño responsivo con Bootstrap, interacciones dinámicas con JavaScript.',
            github: 'https://github.com/jordidaa/WebJa'
        },
        {
            title: 'Juego John Lemon',
            subtitle: 'Unity y C#',
            tag: 'Game',
            description: 'Juego 3D desarrollado con Unity y C#. Ofrece gráficos envolventes y jugabilidad fluida, combinando diseño, programación y optimización para una experiencia inmersiva.',
            github: 'https://github.com/jordidaa/jhonlemon'
        }
    ]
    return (
        <section id="projects" className="projects">
            <div className="section-header">
                <p className="section-label">03. Trabajo</p>
                <h2 className="section-title">Proyectos</h2>
                <div className="section-divider"></div>
            </div>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-card-header">
                            <span className="project-tag">{project.tag}</span>
                            <a href={project.github} target="_blank" rel="noreferrer" className="project-github-link" aria-label={`GitHub de ${project.title}`}>
                                <img src={github} alt="GitHub" className='git-image'/>
                            </a>
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-subtitle">{project.subtitle}</p>
                        <p className="project-description">{project.description}</p>
                        <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                            Ver en GitHub →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects