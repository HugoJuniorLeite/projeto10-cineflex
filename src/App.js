import CompletedRequest from "./components/CompletedRequest";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Seats from "./components/Seats";
import Sessions from "./components/Sessions";
import Movies from "./components/Movies";


function App() {
  return (
    <div>
      <Header />
      <Movies />
      <Sessions />
      <Seats />
      <CompletedRequest />
      <Footer />
    </div>
  );
}

export default App;
