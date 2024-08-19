import './index2.css';
import { Link } from "react-router-dom";

export default function Contatos() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
           <img src="/assets/image/frei.png" className='logo'></img>
           <p></p>
        </nav>
      </header>
      <div>
         <h1>Estudo de React contato </h1>
         <ul>
            <li>
              <Link to='/app' >ir para app</Link>
            </li>
          </ul>
      </div>
    </div>
  );
}
