import Home from './Images/Home.png';
import Search from './Images/Search.png';
import Cart from './Images/Cart.png';
import Profile from './Images/Profile.png';
import './Footer.scss';

function Footer() {
  return (
    <div class="row footer container ">
      <div class="col col-md-3">
        <div class="Logo">
          <img src={Home} alt="Home" />
        </div>
        <div>
          Home
          </div>
      </div>
      <div class="col col-md-3">
        <div class="Logo">
          <img src={Search} alt="Search" />
        </div>
        <div>
          Search
              </div>
      </div>
      <div class="col col-md-3">
        <div class="Logo">
          <img src={Cart} alt="Cart" />
        </div>
        <div>
          Cart
          </div>
      </div>
      <div class="col col-md-3">
        <div class="Logo">
          <img src={Profile} alt="Profile" />
        </div>
        <div>
          Profile
          </div>
      </div>
    </div>
  );
}

export default Footer;