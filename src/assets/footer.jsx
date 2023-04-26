import Logo from "../img/Logo.png";
import './css/footerStyle.css';
export default function Footer(){
    return(
        <footer>
            <div><img src={Logo} alt="" /></div>
            
            <div>
                <h3>
                Doormat Navegation
                </h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservation</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
                </div>
            
            
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Adress</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links
                </h3>
            <ul>
                    <li>Adress</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
        </footer>
    )
}