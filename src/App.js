import logo from './logo.svg';
import './App.css';
import Header from "../src/Components/Header/Header.js";
import Sidebar from"../src/Components/Sidebar/Sidebar";
import Feed from './Components/Feed/Feed';
import Widgets from './Components/Widgets/Widgets';
function App() {
  return (
    <div className="App">
     
     <Header/>
     <div className="App-body">
       <Sidebar/>
       <Feed/>
       <Widgets/>
     </div>
    </div>
  );
}

export default App;
