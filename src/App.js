import CompletedRequest from "./components/CompletedRequest";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Seats from "./components/Seats";
import Sessions from "./components/Sessions";
import Movies from "./components/Movies";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    
    <Header />

    <Routes>
      <Route path="/" element={<Movies />}/>
      <Route path="//" element={<Sessions />}></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>

    </Routes>
      
      
      <Sessions />
      <Seats />
      <CompletedRequest />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
