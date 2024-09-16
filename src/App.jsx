
import Counter from "./components/Counter";
import './styles/App.css';
import photo from './assets/adilsonmanoel.jpg';

function App() {
  return (
    <div className="app-container">
       
      <div className="content">
      <img src={photo} alt="photo" height={300}  />
        <h1>Estamos à <Counter /> sem problemas técnicos</h1>
        <button onClick={() => window.location.reload()}>Resetar Contador</button>
      </div>
    </div>
  );
}

export default App;
