import React, { useEffect, useState } from 'react'
import { fetchWeather } from './Reduxtoolkit'
import { useDispatch, useSelector } from 'react-redux'

function Home() {

    const [ location , setLocation ] = useState('Mumbai')
    const dispatch = useDispatch()
    const  weatherdata = useSelector((state)=>state.user)
    const visible = 23000 / 1000
    console.log(weatherdata);
    const feellike = weatherdata.weatherData.main.feels_like
    const inkls = Math.round(feellike - 273)
    const inkl = inkls.toFixed(0)
    const humiditys = weatherdata.weatherData.main.humidity
    const clouds = weatherdata.weatherData.clouds.all
    const winds= weatherdata.weatherData.wind.speed * 3.6
    const winddata = winds.toFixed(0)
    const windss = weatherdata.weatherData.weather
    const message = windss[0].main
    const temp = weatherdata.weatherData.main.temp
    const temps = Math.round(temp - 273)
    var name = "Search"


    useEffect(()=>{
        dispatch(fetchWeather(location))
    } ,[dispatch])

    const handleget = () => {
        dispatch(fetchWeather(location))
    }
    return (
        <>  <div style={{width:"100%"}}>
            <div className="main">
                <div className="row cloud">
                    <div className="col-3 center">
                        <model-viewer src="low_poly_cloud.glb" className='badal ' auto-rotate style={{ width: '100%', height: '19vh' }}></model-viewer>
                    </div>
                    <div className="col-6 p- tag position-relative">
                        <div>
                            <h3 className='animate-charcter' style={{ fontSize: "2.3rem", marginTop: "1.8rem", fontFamily: "cursive", marginBottom: "-6px" }}>Weather</h3></div>
                        <div style={{ position: 'relative' }}>
                            <input className='inp' value={location} onChange={(e)=>setLocation(e.target.value)}></input>
                            <img src='./flying-airplane.gif' style={{ marginLeft: "20px", width:'35px', position:"absolute", right:"75px", top:"50px"}}></img>
                            <button className='btns' onClick={()=>handleget()}>{name}</button>
                        </div>
                    </div>
                    <div className="col-3 center">
                        <model-viewer src="low_poly_cloud.glb" className='badal' auto-rotate style={{ width: '100%', height: '19vh' }}></model-viewer></div>
                </div>
                <div className='wetherdiv'>
                    <div className=' row secdiv'>
                        <div className='col-12 col-md-5 mt-4'>
                            <div className='fir ml-md-5'>
                            <img src='./google-maps.png' style={{ marginLeft: "20px", width:'28px'}}></img>
                                <span className='citys' style={{ marginLeft: "10px" }}>{weatherdata.weatherData.name}</span>
                            </div>
                            <div className='sec' style={{position:"relative"}}>
                                <b style={{ fontSize: "8rem", fontFamily: "cursive" }}>{temps}</b><sup  className='citys' style={{ fontSize: "2rem", marginBottom: "2.2rem" }}><span style={{ fontSize: "1.4rem", marginRight: "0.1rem", marginLeft:"0.2rem"}}>o</span>C</sup>
                                   {message == "Rain" ? <div className="large-device">
                                       <model-viewer  src="rain_1.glb" auto-rotate style={{ width: '100%', height: '19vh' }}></model-viewer>
                                   </div> : ''} 
                            </div>
                            <div className='thr'>
                                <b className=''>{message}</b>
                            </div>
                        </div>

                        <div className=' col-12 col-md-7 maindata'>
                            <div className='row mt-4'>
                                <div className='v row'>
                                    <div className='col-5 vrs text-white'>
                                    <img src='./storm.png' style={{width:"26px", marginTop:"2px"}}></img>
                                        <h5>wind</h5>
                                        <h3>{winddata} Km/h</h3>
                                    </div>
                                    <div className='col-5 vrs text-white'>
                                    <img src='./humidity.png' style={{width:"32px", marginTop:"2px"}}></img>
                                        <h5>Humidity</h5>
                                        <h3>{humiditys}%</h3>
                                    </div>
                                </div>
                                <div className='v row'>
                                    <div className='col-5 vrs text-white'>
                                    <img src='./barometer.png' style={{width:"40px", marginTop:"1px"}}></img>
                                        <h5>Air Pressure</h5>
                                        <h3>{weatherdata.weatherData.main.pressure} hPA</h3>
                                    </div>
                                    <div className='col-5 vrs text-white'>
                                    <img src='./eye.png' style={{width:"28px", marginTop:"4px"}}></img>
                                        <h5>Visibility</h5>
                                        <h3>{visible && visible} Km</h3>
                                    </div>
                                </div>
                                <div className='v row'>
                                    <div className='col-5 vrs text-white'>
                                    <img src='./tempreature.png' style={{width:"28px", marginTop:"4px"}}></img>
                                    <h5>Feels Like</h5>
                                        <h3>{inkl}<sup>o</sup>c</h3>
                                    </div>
                                    <div className='col-5 vrs text-white'>
                                        <img src='./cloudy.png' style={{width:"30px"}}></img>
                                        <h5>Cloudiness</h5>
                                        <h3>{clouds}%</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Home
