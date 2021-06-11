import logo from './logo.svg';
import './Header.scss';
import Notification from './Images/Notification.png';
import Account from './Images/User-photo.png';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HeaderImg from './Images/HeaderImg.png';

function Header() {
  return (
    <div>
        <header>
            <div>
                <span class="Name">Foodzy</span>
                <span class="Account">
                    <img class="Notification" src={Notification} alt="Notification" />
                    <img class="Profile" src={Account} alt="account" />
                </span>
            </div>
            <div class="line"></div>
            <div class="Header-content row">
                <div class="col col-lg-6">
                    <div  class="Upto">Upto</div>
                    <div  class="Off">60% OFF</div>
                    <div  class="First-order">on your first order</div>
                    <button class="Order-btn">
                        <div class="Order">Order Now</div>
                    </button>
                </div>
                <div class="col col-lg-6 Logo">
                    <img src={HeaderImg} alt="Logo"/>
                </div>
            </div>
        </header>
    </div>
  );
}

export default Header;