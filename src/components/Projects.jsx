import '../css/Projects.css'
import Card from 'react-bootstrap/Card';
import github from '../assets/github.png'
import CardGroup from 'react-bootstrap/CardGroup';

function Projects () {
    const projects = [
        {
            title: 'Proyecto de futbol',
            subtitle: 'JavaFX y SQL',
            description: 'El proyecto consistió en la creación de una aplicación de gestión de fútbol utilizando JavaFX y SQL. Con esta aplicación, los usuarios pueden administrar equipos y jugadores de manera intuitiva y eficiente. La interfaz gráfica desarrollada con JavaFX permite una experiencia visualmente atractiva y fácil de usar, mientras que la base de datos SQL garantiza la persistencia y precisión de los datos. Este proyecto fusiona la pasión por el fútbol con la potencia de las tecnologías de desarrollo de software, brindando una solución completa y versátil para los amantes de este deporte.',
            github: 'https://github.com/jordidaa/projecteFutbol'
        },
        {
            title: 'Web de jardineria',
            subtitle: 'HTML, CSS, JavaScript y Bootstrap',
            description: 'El proyecto es una página web dedicada a la jardinería, desarrollada con CSS, HTML, JavaScript y Bootstrap. Ofrece información, consejos y recursos sobre jardinería. El diseño cuidadoso con CSS realza la temática. HTML estructura el contenido de manera clara y accesible. JavaScript agrega interacciones dinámicas y Bootstrap garantiza un diseño responsivo en diferentes dispositivos.',
            github: 'https://github.com/jordidaa/WebJa'
        },
        {
            title: 'Juego jhon lemon',
            subtitle: 'Unity y C#',
            description: 'El proyecto es un emocionante juego en 3D desarrollado con Unity y programado en C#. Ofrece una experiencia de juego envolvente con gráficos impactantes y jugabilidad fluida. Los jugadores se sumergen en un mundo virtual lleno de desafíos y aventuras, disfrutando de una experiencia única y cautivadora. El proyecto ha requerido habilidades en diseño, programación y optimización para ofrecer una experiencia de juego inmersiva. Estoy orgulloso de haber combinado mis habilidades en Unity y C# para crear este emocionante juego en 3D.',
            github: 'https://github.com/jordidaa/jhonlemon'
        }
    ]
    return (
        <div id="projects" className="projects">
            <h1>Projects</h1>
            <div className="projects-container">
                <CardGroup>
                {projects.map((project, index) => (
                    <Card key={project}>
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{project.subtitle}</Card.Subtitle>
                            <Card.Text>
                                {project.description}
                            </Card.Text>

                            <a href={project.github} target="_blank" rel="noreferrer">
                                <img src={github} alt="github" className='git-image'/>
                            </a>
                        </Card.Body>
                    </Card>
                ))}
                </CardGroup>
            </div>

        </div>
    )
}

export default Projects