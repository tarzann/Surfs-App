import React,{useState,useEffect} from 'react'
import twentyOne from '../images/Component 21 – 1.svg'
import men_white from '../images/icons8-male-white.svg'
import men_black from '../images/icons8_male_black.svg'
import female_black from '../images/icons8-female-black.svg'
import female_white from '../images/icons8_female_white.svg'
import gender_black from '../images/icons8-gender-black.svg'
import gender_white from '../images/icons8_gender_white.svg'
import shoePrint_black from '../images/icons8-shoe_print_black.svg'
import shoePrint_white from '../images/icons8_shoe_print_white.svg'
import sewingTap_white from '../images/icons8-sewing_tape_measure_white.svg'
import sewingTap_black from '../images/icons8_Sewing_Tape_Measure_black.svg'
import warm_white from '../images/icons8-warm-white.svg'
import warm_black from '../images/icons8_warm_black.svg'
import thermoMeter_black from '../images/icons8-thermometer-black.svg'
import thermoMeter_white from '../images/icons8_thermometer_white.svg'
import speed_black from '../images/icons8-speed-black.svg'
import speed_white from '../images/icons8_speed_white.svg'
import shipWheel_white from '../images/icons8-ship_wheel_white.svg'
import shipWheel_black from '../images/icons8_ship_wheel_black.svg'
import {withRouter} from 'react-router-dom'

const SettingPage = ({history}) => {
    const[setting,setSetting]=useState({})


    useEffect(async() => {
        if(localStorage.getItem('userSetting')!==null) {
            await setSetting(JSON.parse(localStorage.getItem('userSetting')))
        } else{
           await localStorage.setItem('userSetting',JSON.stringify({'gender':'Male','waveHeight':'M','temprature':'C','wind':'MPH','deviceType':await getMobileOperatingSystem(),'appVersion':'2.0.7','version':'pro','subscribed':'yes','guid':'1233','settingUrl':'asas'}))
            await setSetting(JSON.parse(localStorage.getItem('userSetting')))

        }

    },[])


    function getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/windows phone/i.test(userAgent)) {
            return "Windows Phone";
        }

        if (/android/i.test(userAgent)) {
            return "Android";
        }

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "iOS";
        }

        return "PC";
    }

    const changeGender=(gender)=>{
     let data=  JSON.parse(localStorage.getItem('userSetting'))
        data.gender = gender
        localStorage.setItem('userSetting',JSON.stringify(data))
        setSetting(JSON.parse(localStorage.getItem('userSetting')))

    }
    const changeTemprature=(temprature)=>{
        let data=  JSON.parse(localStorage.getItem('userSetting'))
        data.temprature = temprature
        localStorage.setItem('userSetting',JSON.stringify(data))
        setSetting(JSON.parse(localStorage.getItem('userSetting')))

    }
    const changeWind=(wind)=>{
        let data=  JSON.parse(localStorage.getItem('userSetting'))
        data.wind = wind
        localStorage.setItem('userSetting',JSON.stringify(data))
        setSetting(JSON.parse(localStorage.getItem('userSetting')))

    }
    const changeWaveHeight=(waveHeight)=>{
        let data=  JSON.parse(localStorage.getItem('userSetting'))
        data.waveHeight = waveHeight
        localStorage.setItem('userSetting',JSON.stringify(data))
        setSetting(JSON.parse(localStorage.getItem('userSetting')))

    }

const getlocalData= (optionType,value)=>{
    let data= setting
    console.log("data type is"+data.optionType)
    if(data.optionType===value){
        // setBackground('#2B5D85')
        return '#2B5D85'
    }else{
        // setBackground('none')

        return 'none'
    }
}


    const getGenderLocalData= (value)=>{
        let data= setting
        if(data.gender===value){
            return '#2B5D85'
        }else{
            return 'none'
        }
    }

    const getWaveHeightLocalData= (value)=>{
        let data= setting
        if(data.waveHeight===value){
            return '#2B5D85'
        }else{
            return 'none'
        }
    }
    const getWindLocalData= (value)=>{
        let data= setting
        if(data.wind===value){
            return '#2B5D85'
        }else{
            return 'none'
        }
    }
    const getTempratureLocalData= (value)=>{
        let data= setting
        if(data.temprature===value){
            return '#2B5D85'
        }else{
            return 'none'
        }
    }


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
                    <img className="header-item " src={twentyOne} onClick={()=>{
                        history.push({
                            pathname:'/'
                        })
                    }}/>

                </div>


                <div className="box-one">
                    <div style={{fontSize: 14}}>GENDER</div>
                    <div className="box-one-content">
                        <div className="box-one-item gender-male" style={{background:getGenderLocalData('Male')}}  onClick={()=>{
                            changeGender('Male')
                        }}>

                            <img src={setting.gender==='Male'?men_white:men_black} name="male" alt="male pic"/>

                        </div>

                        <div className="box-one-item gender-female"  style={{background:getGenderLocalData('Female')}} onClick={()=>{
                            changeGender('Female')
                        }}>
                            <img src={setting.gender==='Female'?female_white:female_black} name="female" alt="male pic" />


                        </div>
                        <div className="box-one-item gender-other" style={{background:getGenderLocalData('Other')}}  onClick={()=>{
                            changeGender('Other')
                        }}>

                            <img src={setting.gender==='Other'?gender_white:gender_black}  name="other"  alt="male pic" />

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
                        <div className="box-one-item gender-male" style={{background:getWaveHeightLocalData('F')}} onClick={()=>{
                            changeWaveHeight('F')
                        }}>

                            <img src={setting.waveHeight==='F'?shoePrint_white:shoePrint_black} name='F' alt="male pic"/>

                        </div>

                        <div className="box-one-item gender-female" style={{background:getWaveHeightLocalData('M')}}  onClick={()=>{
                            changeWaveHeight('M')
                        }}>
                            <img src={setting.waveHeight==='M'?sewingTap_white:sewingTap_black} alt="male pic" />


</div>

</div>
<div className=" box-one-content-text">
<div className=" box-one-item" >feet</div>
<div className=" box-one-item" >meter</div>

    </div>

    </div>
    <div className=" box-one">
        <div style={{fontSize: 14}}>TEMPRATURE</div>
                        <div className="box-one-content">
                            <div className="box-one-item gender-male" style={{background:getTempratureLocalData('C')}} onClick={()=>{
                                changeTemprature('C')
                            }}>

                                <img src={setting.temprature==='C'?warm_white:warm_black} alt="male pic"/>

                            </div>

                            <div className="box-one-item gender-female" style={{background:getTempratureLocalData('F')}} onClick={()=>{
                                changeTemprature('F')
                            }}>
                                <img src={setting.temprature==='F'?thermoMeter_white:thermoMeter_black} alt="male pic" />


</div>

</div>
<div className=" box-one-content-text">
<div className=" box-one-item" >celcius</div>
<div className=" box-one-item" >farehniet</div>

    </div>

    </div>

    <div className=" box-one">
        <div style={{fontSize: 14}}>WIND</div>
                            <div className="box-one-content">
                                <div className="box-one-item gender-male" style={{background:getWindLocalData('KPH')}} onClick={()=>{
                                    changeWind('KPH')
                                }}>

                                    <img src={setting.wind==='KPH'?speed_white:speed_black} alt="male pic"/>

                                </div>

                                <div className="box-one-item gender-female" style={{background:getWindLocalData('MPH')}} onClick={()=>{
                                    changeWind('MPH')
                                }}>
                                    <img src={setting.wind==='MPH'?speed_white:speed_black} alt="male pic"/>


                                </div>
                                <div className="box-one-item gender-other" style={{background:getWindLocalData('KNOTS')}} onClick={()=>{
                                    changeWind('KNOTS')
                                }}>

                                    <img src={setting.wind==='KNOTS'?shipWheel_white:shipWheel_black} alt="male pic"/>

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
                                    pathname:'/'
                                })
                            }}>Change location</a></div>

                            <div><a href="http://surfs-app.com/privacy-policy.html">Privacy Policy</a></div>
                            <div><a href="http://surfs-app.com/support.html">About</a></div>
                        </div>


                    </div>
        </div>
    )
}

export default withRouter(SettingPage)
