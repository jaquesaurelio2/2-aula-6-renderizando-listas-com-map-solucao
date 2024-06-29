import Joke from "./components/Joke";
import jokesData from "./jokesData";

/**
  - Renderize uma lista de componentes Joke utilizando o map e o array
  de piadas jokesData  
  - O componente receberá duas props, setup e punchline
 */

export default function App() {
  const jokes = jokesData.map((jokeData, index) => (
    <Joke key={index} setup={jokeData.setup} punchline={jokeData.punchline} />
  ));

  return <div data-testid="App">{jokes}</div>;
}
