import { useState } from "react";
import { Container } from "../Common/Common.styled";
import { HeaderBlock, HeaderBtnMainNew, HeaderElement, HeaderLogo, HeaderNav, HeaderUser } from "./Header.styled";

function Header ({ addCard }) {

  
  const [isOpened, setIsOpened] = useState(false);

  function togglePopUp() {
    setIsOpened((prev) => !prev);
  }
  return (
      <HeaderElement >
        <Container>
          <HeaderBlock>
            <HeaderLogo>
            <a href="" target="_self">
              <img src="public/logo.png" alt="logo" />
            </a>
            </HeaderLogo>

            {/* <HeaderLogo> */}
            {/* <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
            </HeaderLogo> */}
      
          
            <HeaderNav>
            

              <HeaderBtnMainNew 
              id="btnMainNew"
              onClick={addCard} >
                Создать новую задачу
              </HeaderBtnMainNew>
              
            <HeaderUser href="#"  onClick={togglePopUp}>
            Ivan Ivanov
            </HeaderUser>
            {isOpened && (
              <div className="header__pop-user-set pop-user-set">
                {/* <!-- <a href="">x</a> --> */}
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </HeaderNav>
          </HeaderBlock>
        </Container>
        </HeaderElement>
    
  );
}

export default Header;
