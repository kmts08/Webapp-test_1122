import {
    Link,
    Outlet
} from "react-router-dom";

function Footer() {
    return (
    <footer className="App-footer">
        <div>
            <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/weather">Weather</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
            </nav>
            <hr />
            <Outlet />
        </div>
        <small>&copy; 2022 Japan Electronics College</small>
    </footer>
    );
}

export default Footer;