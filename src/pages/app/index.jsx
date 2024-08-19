import './index.css';
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
           <img src="/assets/image/frei.png" className='logo'></img>
           <p></p>
        </nav>
      </header>
      <div>
         <h1>Estudo de React </h1>
         <ul>
            <li>
              <Link to='/contato' >ir para contato</Link>
            </li>
         </ul>
      </div>
    </div>
  );
}

