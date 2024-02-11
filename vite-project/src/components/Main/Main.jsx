import Column from "../Column/Column"

const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

function Main({isLoaded, cardList}) {
    return (
        <main className="main">
			<div className="container">
				
				<div className="main__block">
					<div className="main__content">
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
						
				
						
					</div>
				
				</div>
			</div>
		</main>
    )
}

export default Main