import React from 'react'
import {withRouter} from "react-router-dom";

import megaphone from '../images/icons8-megaphone-100.svg'
import profile from '../images/profile.jfif'
import surface_logo from '../images/surfsapp_logo.svg'
import crowded from '../images/crowded_2_blk.svg'
import swell from '../images/swell.svg'
import group from '../images/Group 15.svg'
import surfur from '../images/surfer_blk.svg'


const HomePage = ({}) => {
    return (
        <div>
            <header>
                <div className="main-forecast">
                    <span className="weather-place">Haifa,Nirvana SurfsClub</span>
                    <div className="forecast-header">
                        <h1 className="waether-header"/>
                        <h5 className="forecast-large"><span>0.2</span><strong>m</strong></h5>
                        <div className="weather-info">
                            <div className="knt">N-N-E <span>5</span> knt</div>
                        <div className="temp"><span>11&deg 13&deg</span>temp</div>
                        </div>
                </div>
                </div>
            </header>

    <div className="social">
        <div className="card">
            <div className="flex-item prfile-holder">
                <img className="profile" src={profile} alt="prfile-image" />
                <img className ="amplifier" src={megaphone} alt="mega phone"/>

            </div>
            <div className="flex-item weather-description">
        <span >no waves, lets check it
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
            <span style={{fontSize:10}}>Crowd Level</span>
            <img src={crowded}  alt="crowded"/>
            <span>medium</span>


        </div>
        <div className="today-icons-item second-icon">
            <span style={{fontSize: 10}}>swell Level</span>
            <img src={swell}   alt="crowded"/>
            <img src={group}  alt="crowded"/>

        </div>
        <div className="today-icons-item threed-icon">
            <img src={surfur}   alt="crowded"/>
        </div>

    </div>

    <div className="hourly">
        <div className="text-hourly">Hourly</div>
        <div className="all-hour">
            <div className="all-hour-item first-hour">
                <div className="top-hour">06:00</div>
                <div className="large-text">0.2</div>
                <div><span>5</span>knt</div>
                <div className="small-text">N-N-E</div>

            </div>
            <div className="all-hour-item second-hour">
                <div className="top-hour">06:00</div>
                <div className="large-text">0.2</div>
                <div><span>5</span>knt</div>
                <div className="small-text">N-N-E</div>

            </div>
            <div className="all-hour-item threed-hour">
                <div className="top-hour">06:00</div>
                <div className="large-text">0.2</div>
                <div><span>5</span>knt</div>
                <div className="small-text">N-N-E</div>

            </div>
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
            <div className="all-tommorow-item first-tommorow">
                <div className="top-tommorow">06:00</div>
                <div className="large-text">0.2</div>
                <div><span>5</span>knt</div>
                <div className="small-text">N-N-E</div>

            </div>
            <div className="all-tommorow-item second-tommorow">
                <div className="top-tommorow">06:00</div>
                <div className="large-text">0.2</div>
                <div><span>5</span>knt</div>
                <div className="small-text">N-N-E</div>

            </div>
            <div className="all-tommorow-item threed-tommorow">
                <div className="top-tommorow">06:00</div>
                <div className="large-text">0.2</div>
                <div><span>5</span>knt</div>
                <div className="small-text">N-N-E</div>

            </div>
            <div className="all-tommorow-item first-tommorow">
                <div className="top-tommorow">06:00</div>
                <div className="large-text">0.2</div>
                <div><span>5</span>knt</div>
                <div className="small-text">N-N-E</div>

            </div>
            <div className="all-tommorow-item second-tommorow">
                <div className="top-tommorow">06:00</div>
                <div className="large-text">0.2</div>
                <div><span>5</span>knt</div>
                <div className="small-text">N-N-E</div>

            </div>
            <div className="all-tommorow-item threed-tommorow">
                <div className="top-tommorow">06:00</div>
                <div className="large-text">0.2</div>
                <div><span>5</span>knt</div>
                <div className="small-text">N-N-E</div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default withRouter(HomePage)
