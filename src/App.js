import CompletedRequest from "./components/CompletedRequest";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Seats from "./components/Seats";
import Sessions from "./components/Sessions";
import Movies from "./components/Movies";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyles";
import {useState } from "react"

function App() {

  const [name, setName] = useState("")
  const [cpf, setCpf] = useState("")
  const [ids, setIds] = useState([2026])

  return (

    
    <BrowserRouter>
    
    <GlobalStyle/>

    <Header />

    <Routes>
      <Route path="/" element={<Movies />}/>
      <Route path="/sessoes/:idFilme" element={<Sessions />}/>
      <Route path="/assentos/:idSessao" element={<Seats cpf={cpf} setCpf={setCpf} name={name} setName={setName} ids={ids} setIds={setIds}/>}/>
      <Route path="/sucesso" element={<CompletedRequest cpf={cpf} name={name} ids={ids} />}/>
      <Route />

    </Routes>
      

    </BrowserRouter>
  );
}

export default App;
