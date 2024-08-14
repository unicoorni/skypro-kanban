import PopExit from "./components/PopExitComponent/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Main from "./components/Main/Main";
import { useState } from "react";
import { useEffect } from "react";
import { cardList } from "./data";

export default function MainPage() {
  const [cards, setCards] = useState(cardList);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000);
  }, []);

  function addCard() {
    setCards([
      ...cards,
      {
        id: cards.length + 1,

        theme: "Research",

        title: "Новая задача",

        date: "30.10.23",

        status: "Без статуса",
      },
    ]);
  }
  return (
    <>
      <Wrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header addCard={addCard} />
        <Main isLoaded={isLoaded} cardList={cards} />
      </Wrapper>
    </>
  );
}
