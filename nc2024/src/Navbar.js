import './styles/Navbar.css';
import imgNav from './media/NaturalChoice/logos/png/logo-no-background.png';

function Homepage() {
  return (
    <div className="header">
      <img className="naturalchoice-logomain" alt="Natural Choice" src={imgNav}/>
      <div className="text-wrapper">Shop</div>
      <div className="div">Newstand</div>
      <div className="text-wrapper-2">Who we are</div>
      <div className="text-wrapper-3">My profile</div>
      <div className="cart-button">
        <div className="text-wrapper-4">Basket (3)</div>
      </div>
    </div>
  );
}

export default Homepage;
