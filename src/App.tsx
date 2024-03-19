import "./App.scss";
import { Header } from "./components/Header/Header";
import { Item1 } from "./components/Content/Item1";
import { Item2 } from "./components/Content/Item2";
import { Item3 } from "./components/Content/Item3";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="bg" />
      <main>
        <Item1 />
        <Item2 />
        <Item3 />
      </main>
      <Footer />
    </>
  );
}

export default App;
