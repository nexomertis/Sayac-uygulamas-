import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1>Sayaç Uygulaması</h1>
      <p>Sayı: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Arttır
          </button>
          <button onClick={() => setCount(count - 1)}>
          Azalt
          </button>
    </div>
     
  );
}