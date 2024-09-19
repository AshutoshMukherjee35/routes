import { Link } from "react-router-dom";
const Header = () => {

    return(
        <nav className="ms-4 mt-4">
            <ul className="list-unstyled d-flex justify-content-evenly">
                <li><Link className="text-decoration-none" to="/">Home</Link></li>
                <li><Link className="text-decoration-none" to="/about">About</Link></li>
                <li><Link className="text-decoration-none" to="/contact">Contact</Link></li>
                <li><Link className="text-decoration-none" to="/signup">Sign Up</Link></li>
            </ul>
        </nav>
    )
}
export default Header;