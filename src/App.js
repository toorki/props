import Proofile from "./Profile/Proofile.jsx"
import './App.css';

function App() {
  const handleName=(fullName)=>{
    (alert(`my name is ${fullName}`))
  }
  return (
    <div className="App">
      <Proofile fullName="TORKI larousi" profession="i am a full stack web developer" bio="qssdf  jdfsdh fiuhcfdsfg sdhgqsdfsqodo goiquds osd foisud fiuhcfdsfg sdhgqsdfsqodo goiquds osd foisudhfsdi hfqsdiu hfosiduhf" 
     handleName={handleName}/>
    </div>
  );
}

export default App;
