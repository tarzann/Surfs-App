import './App.scss';
import {Route,BrowserRouter, Switch} from 'react-router-dom'
import BottomNavbar from './components/navbar.component'
import HomePage from './pages/home.page'
import SettingPage from './pages/setting.page'
import CountryPage from './pages/country.page'
import React from "react";
import ContinentPage from "./pages/continent.page";
import PlacePage from "./pages/place.page";

function App() {
    return(
    <>


        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/Setting' component={SettingPage}/>
            <Route exact path='/country' component={CountryPage}/>
            <Route exact path='/place' component={PlacePage}/>
            <Route exact path='/continent' component={ContinentPage}/>
        </Switch>
        <BottomNavbar/>

    </>
)
}

export default App;
