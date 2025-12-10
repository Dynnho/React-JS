import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h1>Form em React</h1>
      {/* 1 - form react */}
      <MyForm userName="Sidnei" userEmail="birobiro@caveirao.com.br" />
    </div>
  );
}

export default App;
