
import './App.css';
import Signup from "./pages/Signup"
import NavBar from "./components/Navbar"
import Signin from "./pages/Signin" 

function App() {
  
  console.log(process.env)
  return (
    <div className="App">
    <NavBar/>
    <Signin/>

    <Signup/>
    </div>
  );
}

export default App;
