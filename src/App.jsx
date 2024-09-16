
import  { useState } from "react";
import Counter from "./components/Counter";
import './styles/App.css';
import photo from './assets/adilsonmanoel.jpg';

function App() {
  const [startDate, setStartDate] = useState(new Date("2024-09-16T00:00:00"));

  const handleReset = () => {
    setStartDate(new Date()); // Atualiza a data de início para o momento atual
  };

  return (
    <div className="app-container">
      <div className="content">
        <img src={photo} alt="" height={400} />
        <h1>Estamos a <Counter startDate={startDate} /> sem problemas técnicos</h1>
        <button onClick={handleReset}>Resetar Contador</button>
      </div>
    </div>
  );
}

export default App;
