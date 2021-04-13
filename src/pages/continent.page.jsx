import React,{useEffect,useState} from 'react'

import close from '../images/Component 21 – 1.svg'
import back from '../images/icons8-back.svg'
import CountryList from "../components/country_list.component";
import axios from 'axios'
import {connect} from 'react-redux'
import {showContinentStart} from "../redux/continent/continent.actions";
import {withRouter} from "react-router-dom";





const ContinentPage = ({fetchContinent,continent,history}) => {
    // const[continents,setContinents]=useState([])


    useEffect(()=>{
        // axios.post('http://www.surfs-app.com/App/JSON/lands.json')
        //     .then(response => {
        //         setContinents(response.data.countries.country)
        //         // console.log(response.data.countries);
        //     })
fetchContinent()
    },[])
    return (

        <div>{
            // console.log("continents are"+JSON.stringify(continents))
        }
            <header style={{opacity: 0.7}}>
                <div className="main-forecast">
                    <span className="weather-place">Haifa,Nirvana SurfsClub</span>

                </div>

            </header>
            <div className="app-setting" style={{background: 'white'}}>
                <div className="header">
                    <img className="header-item " src={back}/>

                    <div className="header-item text-setting">SELECT YOUR BEACH<br></br><span style={{fontSize: 12}}>World Wide</span>
                    </div>

                    <img className="header-item " src={close}/>

                </div>


                <ul>
                    {

                        // console.log("Hello"+continent)


                        continent.length?<CountryList lists={continent} histories={history} toWhere='/country' />:'hello'

                    }


                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({

    continent: state.continent.continent,
})

const mapDispatchToProps=dispatch=>({
    fetchContinent:()=>dispatch(showContinentStart())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContinentPage));
