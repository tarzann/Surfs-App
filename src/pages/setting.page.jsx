import React from 'react'
import twentyOne from '../images/Component 21 – 1.svg'
import men from '../images/icons8-male.svg'
import female from '../images/icons8-female.svg'
import gender from '../images/icons8-gender.svg'
import shoePrint from '../images/icons8-shoe_print.svg'
import sewingTap from '../images/icons8-sewing_tape_measure.svg'
import warm from '../images/icons8-warm.svg'
import thermoMeter from '../images/icons8-thermometer.svg'
import speed from '../images/icons8-speed.svg'
import shipWheel from '../images/icons8-ship_wheel.svg'
import {withRouter} from 'react-router-dom'

const SettingPage = ({history}) => {
    return (
        <div>
            <header style={{opacity: 0.7}}>
                <div className="main-forecast">
                    <span className="weather-place">Haifa,Nirvana SurfsClub</span>

                </div>

            </header>
            <div className="app-setting">
                <div className="header">
                    <div className="header-item text-setting">APP SETTINGS</div>
                    <img className="header-item " src={twentyOne}/>

                </div>


                <div className="box-one">
                    <div style={{fontSize: 14}}>GENDER</div>
                    <div className="box-one-content">
                        <div className="box-one-item gender-male">

                            <img src={men} alt="male pic"/>

                        </div>

                        <div className="box-one-item gender-female">
                            <img src={female}alt="male pic"/>


                        </div>
                        <div className="box-one-item gender-other">

                            <img src={gender} alt="male pic"/>

                        </div>
                    </div>
                    <div className="box-one-content-text">
                        <div className="box-one-item">male</div>
                        <div className="box-one-item">female</div>
                        <div className="box-one-item">other</div>

                    </div>

                </div>

                <div className="box-one">
                    <div style={{fontSize: 14}}>WAVE HEIGHT</div>
                    <div className="box-one-content">
                        <div className="box-one-item gender-male">

                            <img src={shoePrint} alt="male pic"/>

                        </div>

                        <div className="box-one-item gender-female">
                            <img src={sewingTap} alt="male pic" />


</div>

</div>
<div class=" box-one-content-text">
<div class=" box-one-item" >less</div>
<div class=" box-one-item" >meter</div>

    </div>

    </div>
    <div class=" box-one">
        <div style={{fontSize: 14}}>TEMPRATURE</div>
                        <div className="box-one-content">
                            <div className="box-one-item gender-male">

                                <img src={warm} alt="male pic"/>

                            </div>

                            <div className="box-one-item gender-female">
                                <img src={thermoMeter} alt="male pic" />


</div>

</div>
<div class=" box-one-content-text">
<div class=" box-one-item" >celcius</div>
<div class=" box-one-item" >farehniet</div>

    </div>

    </div>

    <div class=" box-one">
        <div style={{fontSize: 14}}>WIND</div>
                            <div className="box-one-content">
                                <div className="box-one-item gender-male">

                                    <img src={speed} alt="male pic"/>

                                </div>

                                <div className="box-one-item gender-female">
                                    <img src={speed} alt="male pic"/>


                                </div>
                                <div className="box-one-item gender-other">

                                    <img src={shipWheel} alt="male pic"/>

                                </div>
                            </div>
                            <div className="box-one-content-text">
                                <div className="box-one-item">km</div>
                                <div className="box-one-item">mil</div>
                                <div className="box-one-item">knots</div>

                            </div>

                        </div>
                        <div className="privacy">
                            <div><a onClick={()=>{
                                history.push({
                                    pathname:'/continent'
                                })
                            }}>Change location</a></div>

                            <div><a href="#">Privacy Policy</a></div>
                            <div><a href="#">About</a></div>
                        </div>


                    </div>
        </div>
    )
}

export default withRouter(SettingPage)
