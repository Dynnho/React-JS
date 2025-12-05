import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// 2 - Importando componente

import FirstComponent from "./components/FirstComponent";

// 4 - Template Expression

import TemplateExpression from "./components/TemplateExpression";

// 5 - Hierarquia de componentes

import MyComponent from "./components/MyComponent";

// 6 - Eventos

import { Events } from "./components/Events";

function App() {
  // 3 -comentários

  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        {/* 3 - Comentário em JSX */}

        <h1>Fundamentos do React</h1>
        <FirstComponent />
        <TemplateExpression />
        <MyComponent />
        <Events />
      </div>
    </>
  );
}

export default App;
