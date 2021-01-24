
import Signup from "../pages/Signup"
import NavBar from "../components/Navbar"
import Signin from "../pages/Signin"
import { BrowserRouter, Switch,Route } from "react-router-dom"

function Router() {


    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/register" component={Signup} exact/>
                <Route path="/login" component={Signin} />

            </Switch>

        </BrowserRouter>
    );
}

export default Router;