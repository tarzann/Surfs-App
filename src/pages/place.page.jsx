import React,{useEffect,useState} from 'react'

import close from '../images/Component 21 – 1.svg'
import back from '../images/icons8-back.svg'
import CountryList from "../components/country_list.component";
import axios from "axios";


const PlacePage = ({location,continent,place,history}) => {
    const[places,setPlaces]=useState([])
    place=location ? location.state.detail : null
    continent=location ? location.state.continent : null
    useEffect(()=>{
        axios.post(`http://www.surfs-app.com/App/JSON/${continent}/${place}.json`)
            .then(response => {
                setPlaces(response.data.countries.country)
                // console.log(response.data.countries);
            })

    },[])
    return (
        <div>
            <header style={{opacity: 0.7}}>
                <div className="main-forecast">
                    <span className="weather-place">Haifa,Nirvana SurfsClub</span>

                </div>

            </header>
            <div className="app-setting" style={{background: 'white'}}>
                <div className="header">
                    <img className="header-item " src={back} onClick={()=>{
                        history.push({
                            pathname:'/country',
                            state:{
                                detail:continent,

                            }
                        })
                    }}/>

                    <div className="header-item text-setting">SELECT YOUR BEACH<br></br><span style={{fontSize: 12}}>World Wide -{ continent }-{place}</span>
                    </div>

                    <img className="header-item " src={close}/>

                </div>


                <ul>
                    {
                        <CountryList lists={places}/>

                    }


                </ul>
            </div>
        </div>
    )
}

export default PlacePage;
