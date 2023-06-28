import '../css/Header.css';
import headerImg from '../assets/header.jpg';

function Header () {
    return (
        <div className="header">
            <img src={headerImg} alt="header" />
            <h1>Jordi Dueñas Algarrada</h1>
            <h2>Programador FullStack</h2>
        </div>
    )
}

export default Header;