import './PopularRestaurants.scss';
import Behrouz from './Images/Behrouz.png';
import Restaurants from './PoplarRestaurant.json';
import Popular1 from './Images/Popular-1.png';
import Popular2 from './Images/Popular-2.png';
import Popular3 from './Images/Popular-3.png';
import fortytwo from './Images/fortytwo.png';
import thirtyfive from './Images/thirtyfive.png';
import promo from './Images/promo.png';

function PopularRestaurants() {
var restaurant = Restaurants;

let renderCard = (value, index) => {
    return (
        <div class="row">
            <div class="col col-md-4">
                {index === 0 ? <img src={Popular1} alt={value.name} /> : index === 1 ? <img src={Popular2} alt={value.name} /> : <img src={Popular3} alt={value.name} />}
            
            </div>
            <div class="col col-md-8">
                <a href="/shop"><div class="name">{value.name}</div></a>
                <div class="type">{value.type}</div>
                <button class="rating">
                    {value.rating === "4.2" ? <img src={fortytwo} alt="start"/> : <img src={thirtyfive} alt="start"/> }
                </button>
                <div class="promo"><span><img src={promo} alt="promo"/></span><span>{value.promo}</span></div>
                <div class="rate">{value.rate}</div>
            </div>
        </div>
    );
};
  return (
    <div class="PopularRestaurants">
        <div class="Sub-heading">Popular Restaurants</div>
        {restaurant.map((element, index) => {
            return renderCard(element, index);            
        })}
        <button class="ViewAll">
            <span>View All</span>
        </button>        
    </div>
  );
}
export default PopularRestaurants;