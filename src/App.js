import CompletedRequest from "./components/CompletedRequest";
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
  const [ids, setIds] = useState([])
  const [footer, setFooter]=useState({})
  const [sala, setSala]=useState([])

  return (

    
    <BrowserRouter>
    
    <GlobalStyle/>

    <Header />

    <Routes>
      <Route path="/" element={<Movies />}/>
      <Route path="/sessoes/:idFilme" element={<Sessions footer={footer}  setFooter={setFooter} sala={sala} setSala={setSala}/>}/>
      <Route path="/assentos/:idSessao" element={<Seats cpf={cpf} setCpf={setCpf} name={name} setName={setName} ids={ids} setIds={setIds}/>}/>
      <Route path="/sucesso" element={<CompletedRequest sala={sala} footer={footer} cpf={cpf} name={name} ids={ids} />}/>
      <Route />


    </Routes>
      
    

    </BrowserRouter>
  );
}

export default App;
