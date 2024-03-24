import "./App.css";
// import { useEffect, useState } from "react";
// import { cardList } from "./data";
import { GlobalStyle } from "./Global.styled";
import { appRoutes } from "./lib/appRoutes";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import CardPage from "../pages/CardPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

function App() {
  // const [cards, setCards] = useState(cardList);

  // const [isLoaded, setIsLoaded] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoaded(false);
  //   }, 2000);
  // }, []);

  // function addCard() {
  //   setCards([
  //     ...cards,
  //     {
  //       id: cards.length + 1,

  //       theme: "Research",

  //       title: "Новая задача",

  //       date: "30.10.23",

  //       status: "Без статуса",
  //     },
  //   ]);
  // }
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path={appRoutes.MAIN} element={<MainPage/>} />
        <Route path={appRoutes.CARD} element={<CardPage/>} />
        <Route path={appRoutes.LOGIN} element={<LoginPage/>} />
        {/* <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage/>} /> */}
        <Route path={appRoutes.REGISTER} element={<RegisterPage/>} />
        {/* <Route path={appRoutes.EXIT} element={<PopExitPage/>} /> */}

      </Routes>
    </>
  );
}

export default App;
