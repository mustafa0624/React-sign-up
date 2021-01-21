
import './App.css';
import Signup from "./pages/Signup"
import NavBar from "./components/Navbar"

function App() {
  
  console.log(process.env)
  return (
    <div className="App">
    <NavBar/>
    <Signup/>
    </div>
  );
}

export default App;
