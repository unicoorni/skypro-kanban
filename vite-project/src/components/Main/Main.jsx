import Column from "../Column/Column"
import { Container } from "../Common/Common.styled";
import { MainBlock, MainContent, MainElement } from "./Main.styled";

const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

function Main({isLoaded, cardList}) {
  
    return (
          <MainElement>
          <Container> 
          <MainBlock>
            <MainContent>
            {isLoaded? 'loading' : statusList.map((item) => (
                        <Column
                        key={item} 
                        title={item} 
                        cardList={cardList.filter((card) => card.status === item)} />
                        ))
                        }
                        
                       
                        {/* <Column title={'Нужно сделать'} />
                        <Column title={'В работе'} />
                        <Column title={'Тестирование'} />
                        <Column title={'Готово'} /> */}
						
				
						
            </MainContent>
				
          </MainBlock>
        </Container> 
        </MainElement>
    )
}

export default Main