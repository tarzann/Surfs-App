import React,{useState,useEffect} from 'react'

import close from '../images/Component 21 – 1.svg'
import back from '../images/icons8-back.svg'
import CountryList from "../components/country_list.component";
import {withRouter} from "react-router-dom";

import {connect} from "react-redux";
import {showCountryStart} from "../redux/countries/countries.actions";

const CountryPage = ({country,location,fetchCountry,history}) => {
    console.log("location is"+location.state.detail)
   useEffect(()=>{
       fetchCountry(location ? location.state.detail : null)

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
                    <img className="header-item " src={back}  onClick={()=>{
                        history.push({
                            pathname:'/continent',
                            state:{
                                detail:location ? location.state.detail : null

                            }
                        })
                    }}/>

                    <div className="header-item text-setting">SELECT YOUR BEACH<br></br><span style={{fontSize: 12}}>World Wide - {location ? location.state.detail : null}</span>
                    </div>

                    <img className="header-item " src={close} onClick={()=>{
                        history.push({
                            pathname:'/'
                        })
                    }} />

                </div>


                <ul>
                    {
                            <CountryList lists={country} histories={history} continent={location.state.detail}  toWhere='/place'/>
                    }

                </ul>
        </div>
        </div>
    )
}
const mapStateToProps = state => ({

    country: state.countries.country,
})

const mapDispatchToProps=dispatch=>({
    fetchCountry:(continent)=>dispatch(showCountryStart({continent}))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (CountryPage));
