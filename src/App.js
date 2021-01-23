
import './App.css';

import Router from "./Router/Router"
import AuthContext from "./context/AuthContext"

function App() {
  
  
  return (
    <AuthContext >
   <Router/>
    </AuthContext>
  );
}

export default App;
