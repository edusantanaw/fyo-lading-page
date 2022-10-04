import { GlobalStyle } from "./styles/styles";
import Header from "./components/Nav";
import Home from "./components/Home";
import Infos from "./components/Infos";
import Productive from "./components/Productive";
import Comments from "./components/Comments";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Home />
      <Infos />
      <Productive />
      <Comments />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
