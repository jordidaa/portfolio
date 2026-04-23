import '../css/Skils.css'

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

const frontendSkills = [
    { src: html, name: 'HTML' },
    { src: css, name: 'CSS' },
    { src: js, name: 'JavaScript' },
    { src: react, name: 'React' },
    { src: vue, name: 'Vue' },
    { src: android, name: 'Android Studio' },
    { src: bootstrap, name: 'Bootstrap' },
];

const backendSkills = [
    { src: php, name: 'PHP' },
    { src: java, name: 'Java' },
    { src: python, name: 'Python' },
    { src: laravel, name: 'Laravel' },
    { src: mysql, name: 'MySQL' },
    { src: postgresql, name: 'PostgreSQL' },
];

function SkillCard({ src, name }) {
    return (
        <div className="skill-card">
            <img src={src} alt={name} />
            <span>{name}</span>
        </div>
    );
}

function Skils () {
    return (
        <section className="skils" id='skils'>
            <div className="section-header">
                <p className="section-label">02. Tecnologías</p>
                <h2 className="section-title">Habilidades</h2>
                <div className="section-divider"></div>
            </div>

            <div className="skills-category">
                <h3 className="category-title">Frontend</h3>
                <div className="skills-grid">
                    {frontendSkills.map((s) => <SkillCard key={s.name} src={s.src} name={s.name} />)}
                </div>
            </div>

            <div className="skills-category">
                <h3 className="category-title">Backend &amp; Bases de datos</h3>
                <div className="skills-grid">
                    {backendSkills.map((s) => <SkillCard key={s.name} src={s.src} name={s.name} />)}
                </div>
            </div>
        </section>
    )
}

export default Skils;
