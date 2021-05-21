import React, {useEffect, useState} from 'react'
import {withRouter} from "react-router-dom";

import megaphone from '../images/icons8-megaphone-100.svg'
import profile from '../images/profile.jfif'
import surface_logo from '../images/surfsapp_logo.svg'
import crowded from '../images/crowded_2_blk.svg'
import swell from '../images/swell.svg'
import group from '../images/Group 15.svg'
import zero_rating from '../images/zero_rating.svg'
import one_rating from '../images/one_rating.svg'
import two_rating from '../images/two_rating.svg'
import three_rating from '../images/three_rating.svg'
import four_rating from '../images/four_rating.svg'
import five_rating from '../images/five_rating.svg'
import surfur from '../images/surfer_blk.svg'
import axios from "axios";
import {connect} from "react-redux";
import {showContinentStart} from "../redux/continent/continent.actions";
import {showHoursStart} from "../redux/hour/hours.actions";

// import Rating from 'material-ui-rating'


const HomePage = ({location, fetchHours, closestTime, todayHours, tomorrowHours, afterTomorrowHours,afterAfterTomorrowHours}) => {
    const [lastLocationId, setLastLocationId] = useState('')
    // const [closestTime, setClosestTime] = useState({})

    useEffect(async() => {
        if(localStorage.getItem('lastLocationId')!==null){
            let id=await localStorage.getItem('lastLocationId')
            setLastLocationId(id)
            await fetchHours(id)
        }else{
           await fetchHours(location.state.id ? location.state.id : '')
           await localStorage.setItem('lastLocationId',location.state.id)
           await setLastLocationId(localStorage.getItem('lastLocationId'))


        }


    }, [])
    const convertTimeStampToCurrentDateFormat = (type, requiredTime) => {

        switch (type) {
            case 'date':
                return new Date(requiredTime * 1000).getDate()
            case 'month':
                return  new Date(requiredTime* 1000).getMonth()

            case 'year':
                return new Date(requiredTime * 1000).getFullYear()

            default:
                break;

        }


    }

    const getRatingInfo=(rating) =>{
        if(rating===0){
            return zero_rating;

        }else if(rating===1){
            return one_rating;


        }else if(rating===2){
            return two_rating;


        }else if(rating===3){
            return three_rating;


        }else if(rating===4){
            return four_rating;


        }else {
            return five_rating;

        }
    }

    return (
        <div>
            {
                // console.log("current time is" + closest(placesDetail, currentTimeStamp()))
            }
            {
                // console.log(JSON.stringify(getClosestTimestampInfo(placesDetail, closest(placesDetail, currentTimeStamp()))))
                console.log("Really" + JSON.stringify(closestTime.BreakingAverage))

                // console.log("current day is"+JSON.stringify(currentDay))


            }
            <header>
                <div className="main-forecast">
                    <span className="weather-place">Haifa,Nirvana SurfsClub</span>
                    <div className="forecast-header">
                        <h1 className="waether-header"/>
                        <h5 className="forecast-large">
                            <span>{Math.round(closestTime.BreakingAverage * 10) / 10}</span><strong>m</strong></h5>
                        <div className="weather-info">
                            <div className="knt">N-N-E <span>{closestTime.windSpeed}</span> knt</div>
                            <div className="temp">
                                <span>{closestTime.airTemp} {'\u00b0'} {closestTime.waterTemp} {'\u00b0'}</span>temp
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="social">
                <div className="card">
                    <div className="flex-item prfile-holder">
                        <img className="profile" src={profile} alt="prfile-image"/>
                        <img className="amplifier" src={megaphone} alt="mega phone"/>

                    </div>
                    <div className="flex-item weather-description">
        <span>no waves, lets check it
               again later</span>
                    </div>
                    <div className="flex-item social-info">
                        <img className="like" src={surface_logo} alt="app logo"/>
                        <span className="like-count">1,952</span>
                        <div className="time">5 minutes ago</div>
                    </div>


                </div>
            </div>

            <div className="today-icons">
                <div className="today-icons-item first-icon">
                    <span style={{fontSize: 10}}>Crowd Level</span>
                    <img src={crowded} alt="crowded"/>
                    <span>medium</span>


                </div>
                <div className="today-icons-item second-icon">
                    <span style={{fontSize: 10}}>swell Level</span>
                    <div>
                        <img src={swell} className="icons_first" alt="swell Level"/>

                        {
                        //     closestTime.fadedRating===0?0
                        //         switch(){
                        //
                        // }
                        //     if(closestTime.fadedRating==='0'){
                        //
                        // }
                        }

                        <img src={getRatingInfo(closestTime.fadedRating)}  className="icons_second" alt="star"/>
                    </div>

                </div>
                <div className="today-icons-item threed-icon">
                    <img src={surfur} alt="crowded"/>
                </div>

            </div>

            <div className="hourly">
                <div className="text-hourly">Hourly</div>
                <div className="all-hour">{
                    todayHours.map((hour => {
                            if ((new Date(hour.timestamp * 1000).getHours() !== 0) && new Date(hour.timestamp * 1000).getHours() !== 3) {
                                return (
                                    <div className="all-hour-item first-hour" style={{marginTop:10-(Math.round(hour.BreakingAverage * 10) / 10)*50}} >
                                        <div className="top-hour">{new Date(hour.timestamp * 1000).getHours()}:00</div>
                                        <div className="large-text" >{Math.round(hour.BreakingAverage * 10) / 10}</div>
                                        <div><span>{hour.windSpeed}</span>knt</div>
                                        <div className="small-text">N-N-E</div>

                                    </div>
                                )


                            }

                        }

                    ))
                }

                </div>
            </div>
            <div className="add">
                <div className="add-text">
                    Ad here

                </div>
            </div>

            <div className="tommorow">
                <div className="text-tommorrow">Tomorrow</div>
                <div className="all-tommorow">
                    {
                        tomorrowHours.map((hour => {
                            if ((new Date(hour.timestamp * 1000).getHours() !== 0) && new Date(hour.timestamp * 1000).getHours() !== 3) {
                                return (
                                    <div className="all-tommorow-item first-tommorow" style={{marginTop:10-(Math.round(hour.BreakingAverage * 10) / 10)*50}}>
                                        <div className="top-tommorow">{new Date(hour.timestamp * 1000).getHours()}:00
                                        </div>
                                        <div className="large-text">{Math.round(hour.BreakingAverage * 10) / 10}</div>
                                        <div><span>{hour.windSpeed}</span>knt</div>
                                        <div className="small-text">N-N-E</div>

                                    </div>
                                )
                            }
                        }))
                    }


                </div>
            </div>
            <div className="tommorow ">
                <div
                    className="text-tommorrow">{convertTimeStampToCurrentDateFormat('date',afterTomorrowHours[0]?afterTomorrowHours[0].timestamp:'')}/
                    {convertTimeStampToCurrentDateFormat('month',afterTomorrowHours[0]?afterTomorrowHours[0].timestamp:'')}/
                    {convertTimeStampToCurrentDateFormat('year',afterTomorrowHours[0]?afterTomorrowHours[0].timestamp:'')}
                </div>
                <div className="all-tommorow">
                    {
                        afterTomorrowHours.map((hour => {
                            if ((new Date(hour.timestamp * 1000).getHours() !== 0) && new Date(hour.timestamp * 1000).getHours() !== 3) {
                                return (
                                    <div className="all-tommorow-item first-tommorow" style={{marginTop:10-(Math.round(hour.BreakingAverage * 10) / 10)*50}}>
                                        <div className="top-tommorow">{new Date(hour.timestamp * 1000).getHours()}:00
                                        </div>
                                        <div className="large-text">{Math.round(hour.BreakingAverage * 10) / 10}</div>
                                        <div><span>{hour.windSpeed}</span>knt</div>
                                        <div className="small-text">N-N-E</div>

                                    </div>
                                )
                            }
                        }))
                    }


                </div>
            </div>

            <div className="tommorow afterTomorrow">
                <div
                    className="text-tommorrow">{convertTimeStampToCurrentDateFormat('date',afterAfterTomorrowHours[0]?afterAfterTomorrowHours[0].timestamp:'')}/
                    {convertTimeStampToCurrentDateFormat('month',afterAfterTomorrowHours[0]?afterAfterTomorrowHours[0].timestamp:'')}/
                    {convertTimeStampToCurrentDateFormat('year',afterAfterTomorrowHours[0]?afterAfterTomorrowHours[0].timestamp:'')}
                </div>
                <div className="all-tommorow">
                    {
                        afterAfterTomorrowHours.map((hour => {
                            if ((new Date(hour.timestamp * 1000).getHours() !== 0) && new Date(hour.timestamp * 1000).getHours() !== 3) {
                                return (
                                    <div className="all-tommorow-item first-tommorow" style={{marginTop:10-(Math.round(hour.BreakingAverage * 10) / 10)*50}}>
                                        <div className="top-tommorow">{new Date(hour.timestamp * 1000).getHours()}:00
                                        </div>
                                        <div className="large-text">{Math.round(hour.BreakingAverage * 10) / 10}</div>
                                        <div><span>{hour.windSpeed}</span>knt</div>
                                        <div className="small-text">N-N-E</div>

                                    </div>
                                )
                            }
                        }))
                    }


                </div>
            </div>

        </div>
    )
}


const mapStateToProps = state => ({

    closestTime: state.hours.closestTime,
    todayHours: state.hours.todayHours,
    tomorrowHours: state.hours.tomorrowHours,
    afterTomorrowHours: state.hours.afterTomorrowHours,
    afterAfterTomorrowHours:state.hours.afterAfterTomorrowHours
})

const mapDispatchToProps = dispatch => ({
    fetchHours: (id) => dispatch(showHoursStart({id}))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage))
