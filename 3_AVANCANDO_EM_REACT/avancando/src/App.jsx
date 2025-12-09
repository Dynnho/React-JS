import { Children } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// 2 - imagem em assets

import night from "./assets/night.jpg";

// 3 - useState

import Data from "./components/Data";

// 4 - rederização de lista

import ListRender from "./components/ListRender";

// 7 - render condicional
import ConditionalRender from "./components/ConditionalRender";

// 8 - props

import ShowUserName from "./components/ShowUserName";

// 9 - desestruturando props

import CarDetails from "./components/CarDetails";

// 11 - renderização de listas com componentes

const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 1, brand: "KIA", color: "Rosa", km: 20000 },
  { id: 1, brand: "Gurgel", color: "Azul", km: 32000 },
];

// 12 - fragment

import Fragment from "./components/Fragment";

// 13 - children

import Container from "./components/Container";

// 14 - função em prop

import ExecuteFunction from "./components/ExecuteFunction";

// 15 - state lift

import { useState } from "react";

import Message from "./components/Message";

import ChangeMessage from "./components/ChangeMessage";

function App() {
  // 14 - função em prop

  function showMessage() {
    console.log("Evento do componente pai");
  }

  // 15 - state lift

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <div className="App" style={{ paddingBottom: "500px" }}>
        <h1>Avançando em React</h1>
        {/* 1 - imagem em public */}
        <img src="/img.jpg" alt="No meio de uma avenida" />
        {/* 2 - imagem em assets */}
        <img src={night} alt="Navegando a noite" />
        {/* 3 - userState */}
        <Data />
        {/* 4 - render de lista */}
        <ListRender />
        {/* 7 - render condicional */}
        <ConditionalRender />
        {/* 8 - props */}
        <ShowUserName name="Magnata" />
        {/* 9 - desestruturando props */}
        <CarDetails brand="FIAT" km="35000" color="Marrom" />
        {/* 10 - reaproveitamento de componente */}
        <CarDetails brand="VW" color="Branco" km="10" />
        <CarDetails km="2000" brand="FORD" color="Azul" />
        {/* 11 - renderização de lista com componente */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
          />
        ))}
        {/* 12 - fragment */}
        <Fragment />
        {/* 13 - children */}
        <Container>
          <p>Algo par se ver!</p>
        </Container>
        <Container>
          <div>
            <h2>Teste!</h2>
            <p>Meu container</p>
          </div>
        </Container>
        {/* 14 - função em prop */}
        <ExecuteFunction myFunction={showMessage} />
        {/* 15 - state lift */}
        <Message msg={message} />
        <ChangeMessage handleMessage={handleMessage} />
      </div>
    </>
  );
}

export default App;
