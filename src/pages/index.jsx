import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { BookingSummary } from '../components/BookingSummary/BookingSummary.jsx'; 

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <div className="logo"></div>
      <h2>Rezervace</h2>
    </header>
    <main>
      <BookingSummary/> 
    </main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);
