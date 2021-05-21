import React,{useState,useEffect} from 'react'
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

        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            return "Windows Phone";
        }

        if (/android/i.test(userAgent)) {
            return "Android";
        }

        // iOS detection from: http://stackoverflow.com/a/9039885/177710
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

                            <img src={men} name="male" alt="male pic"/>

                        </div>

                        <div className="box-one-item gender-female"  style={{background:getGenderLocalData('Female')}} onClick={()=>{
                            changeGender('Female')
                        }}>
                            <img src={female} name="female" alt="male pic" />


                        </div>
                        <div className="box-one-item gender-other" style={{background:getGenderLocalData('Other')}}  onClick={()=>{
                            changeGender('Other')
                        }}>

                            <img src={gender}  name="other"  alt="male pic" />

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

                            <img src={shoePrint} name='F' alt="male pic"/>

                        </div>

                        <div className="box-one-item gender-female" style={{background:getWaveHeightLocalData('M')}}  onClick={()=>{
                            changeWaveHeight('M')
                        }}>
                            <img src={sewingTap} alt="male pic" />


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

                                <img src={warm} alt="male pic"/>

                            </div>

                            <div className="box-one-item gender-female" style={{background:getTempratureLocalData('F')}} onClick={()=>{
                                changeTemprature('F')
                            }}>
                                <img src={thermoMeter} alt="male pic" />


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

                                    <img src={speed} alt="male pic"/>

                                </div>

                                <div className="box-one-item gender-female" style={{background:getWindLocalData('MPH')}} onClick={()=>{
                                    changeWind('MPH')
                                }}>
                                    <img src={speed} alt="male pic"/>


                                </div>
                                <div className="box-one-item gender-other" style={{background:getWindLocalData('KNOTS')}} onClick={()=>{
                                    changeWind('KNOTS')
                                }}>

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

                            <div><a href="http://surfs-app.com/privacy-policy.html">Privacy Policy</a></div>
                            <div><a href="http://surfs-app.com/support.html">About</a></div>
                        </div>


                    </div>
        </div>
    )
}

export default withRouter(SettingPage)
