import logo from './logo.svg';
import {
    Link,
    Outlet
} from "react-router-dom";

function Header() {
    return (
    <header className="App-header">
        <img src={logo} alt="logo" />
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
    </header>
    );
}

export default Header;