import Cards from './component/Cards';
import cardsData from './component/cardsData';
import Input from './component/Input';
import Jokes from './component/Jokes';
import Name from './component/Name';
import Time from './component/Time';



 export default function App() {
       const cardsElements  = cardsData.map(card => {
    return <Cards setup={card.setup} punchline={card.punchline} />
       })

      
 // const cardsElements = cardsData.map(card => {
  //  return <Cards setup={card.setup} punchline={card.punchline} />
//})
  return (
    <div className="App">
    <Name />
    <Input />
    {cardsElements}
      <Time />
    <Jokes
        joke="What do you call a fake noodle?"
                rating="6.0"
                reviewCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={145}
                name="Katie Zaferes"
            />
                 <Jokes
        joke="cooking good codes make it easy?"
                rating="4.0"
                reviewCount={4}
                country="USA"
                title="Life Lessons with Amy Schumer"
                price={136}
                name="Aniki Yusuf"
            />
                 <Jokes
        joke="Calling to be the best?"
                rating="5.0"
                reviewCount={5}
                country="USA"
                title="Class With BhadChef"
                price={343}
                name="BhadChaf"
            />
    </div>
  );
}

