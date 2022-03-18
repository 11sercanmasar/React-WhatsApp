
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Chatbar from './components/chatbar/Chatbar'
function App() {
  return (
    <div className="App-Wrapper">
    <div className="App">
      <Sidebar/>  
      <Chatbar/>
    </div>
    </div>
  );
}

export default App;
