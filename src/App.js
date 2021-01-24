
import './App.css';

import Router from "./Router/Router"
import AuthContextProvider from "./context/AuthContext"

function App() {


  return (
    
    <AuthContextProvider >
      <Router />
    </AuthContextProvider>
    
  );
}

export default App;
