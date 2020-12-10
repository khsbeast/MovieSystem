import './App.css';
import Header from "./Components/header/header"
import Player from "./Components/Player/player"
import Data from "./Components/data/data"
import Card from "./Components/card/card"
import Last from './Components/last/last';
const App =() => {
  return (
    <div className="App">
     <Header />
     <Player />
     <Data />
     <div style={{display:"flex",justifyContent:"space-around",paddingTop:"4vh"}}>
     <Card />
     </div>
     <Last/>
    </div>
  );
}

export default App;
