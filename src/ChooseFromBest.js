import logo from './logo.svg';
import './ChooseFromBest.scss';
import Best1 from './Images/Best-1.png';
import Best2 from './Images/Best-2.png';
import Best3 from './Images/Best-3.png';
import Best4 from './Images/Best-4.png';
import Best5 from './Images/Best-5.png';
import Best6 from './Images/Best-6.png';
import Best7 from './Images/Best-7.png';
import Best8 from './Images/Best-8.png';

function ChooseFromBest() {
  return (
    <div class="Choose-from-best container">
      <div class="Sub-heading">Choose from the best</div>
      <div class="row">
        <div class="col col-lg-3">
          <img src={Best1} alt="best"/>
          <div class="Card-header">South indian</div>
        </div>
        <div class="col col-lg-3">
          <img src={Best2} alt="best"/>
          <div class="Card-header">Beverages</div>
        </div>
        <div class="col col-lg-3">
          <img src={Best3} alt="best"/>  
          <div class="Card-header">Sandwitches</div>
        </div>
        <div class="col col-lg-3">
          <img src={Best4} alt="best"/>
          <div class="Card-header">Sweets</div>
        </div>
      </div>
      <div class="row">
        <div class="col col-lg-3">
          <img src={Best5} alt="best"/>
          <div class="Card-header">North Indian</div>
        </div>
        <div class="col col-lg-3">
          <img src={Best6} alt="best"/>
          <div class="Card-header">Continental</div>
        </div>
        <div class="col col-lg-3">
          <img src={Best7} alt="best"/>  
          <div class="Card-header">Deserts</div>
        </div>
        <div class="col col-lg-3">
          <img src={Best8} alt="best"/>
          <div class="Card-header">Ice Cream</div>
        </div>
      </div>
    </div>
  );
}

export default ChooseFromBest;