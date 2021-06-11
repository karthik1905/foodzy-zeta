import logo from './logo.svg';
import './Home.scss';
import Header from './Header';
import Favourites from './Favourites';
import ChooseFromBest from './ChooseFromBest';
import PopularRestaurants from './PopularRestaurants';
import Footer from './Footer';

function Home() {
  return (
    <div class="HomeContent">
        <Header />
        <div class="content">
          <Favourites />
          <ChooseFromBest />
          <PopularRestaurants />
          <Footer />
        </div>
    </div>
  );
}

export default Home;