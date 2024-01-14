import "./App.css";
import PopExit from "./components/PopExitComponent/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Main from "./components/Main/Main";

function App() {
  return (
    <Wrapper>
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main />
    </Wrapper>
  );
}

export default App;
