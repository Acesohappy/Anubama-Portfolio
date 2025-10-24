import './Navbar.css';

function Navbar(){
    return(
        <div className="Navbar-section">
            <nav className="Navbar">
                <h1 className="nav-title">Anubama</h1>
                <ul className="nav-links">
                    <li><a href="#Header">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;