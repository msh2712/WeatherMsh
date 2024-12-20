import React, { useEffect, useState } from 'react'
import { fetchWeather } from './Reduxtoolkit'
import { useDispatch, useSelector } from 'react-redux'

function Home() {

    const [ location , setLocation ] = useState('Mumbai')
    const dispatch = useDispatch()
    const  cloud = useSelector((state)=>state.user.cloud)
    const  main = useSelector((state)=>state.user.main)
    const  weather = useSelector((state)=>state.user.weather)
    const  wind = useSelector((state)=>state.user.wind)
    const  data = useSelector((state)=>state.user.data)
    console.log(data)

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
                            <button className='btns' onClick={()=>handleget()}>Search</button>
                        </div>
                    </div>
                    <div className="col-3 center">
                        <model-viewer src="low_poly_cloud.glb" className='badal' auto-rotate style={{ width: '100%', height: '19vh' }}></model-viewer></div>
                </div>
                <div className='wetherdiv'>
                    <div className=' row secdiv'>
                        <div className='col-12 col-md-5 mt-4'>
                            <div className='fir ml-md-5'>
                            <img src='./google-maps.png' style={{ marginLeft: "20px", width:'28px'}} alt='image'></img>
                                <span className='citys' style={{ marginLeft: "10px" }}>{data && data.name}</span>
                            </div>
                            <div className='sec' style={{position:"relative"}}>
                                <b style={{ fontSize: "8rem", fontFamily: "cursive" }}>{(main.temp - 273.15).toFixed(0)}</b><sup  className='citys' style={{ fontSize: "2rem", marginBottom: "2.2rem" }}><span style={{ fontSize: "1.4rem", marginRight: "0.1rem", marginLeft:"0.2rem"}}>o</span>C</sup>
                                    <div className="large-device">
                                       <model-viewer  src="rain_1.glb" auto-rotate style={{ width: '100%', height: '19vh' }}></model-viewer>
                                   </div>
                            </div>
                            <div className='thr'>
                                <b className=''>{weather && weather.main}</b>
                            </div>
                        </div>

                        <div className=' col-12 col-md-7 maindata'>
                            <div className='row mt-4'>
                                <div className='v row'>
                                    <div className='col-5 vrs text-white'>
                                    <img src='./storm.png' style={{width:"26px", marginTop:"2px"}}  alt='image'></img>
                                        <h5>wind</h5>
                                        <h3>{wind && wind.speed} Km/h</h3>
                                    </div>
                                    <div className='col-5 vrs text-white'>
                                    <img src='./humidity.png' style={{width:"32px", marginTop:"2px"}}  alt='image'></img>
                                        <h5>Humidity</h5>
                                        <h3>{main && main.humidity}%</h3>
                                    </div>
                                </div>
                                <div className='v row'>
                                    <div className='col-5 vrs text-white'>
                                    <img src='./barometer.png' style={{width:"40px", marginTop:"1px"}}  alt='image'></img>
                                        <h5>Air Pressure</h5>
                                        <h3>{main && main.pressure} hPA</h3>
                                    </div>
                                    <div className='col-5 vrs text-white'>
                                    <img src='./eye.png' style={{width:"28px", marginTop:"4px"}}  alt='image'></img>
                                        <h5>Visibility</h5>
                                        <h3>{data && data.visibility/1000} Km</h3>
                                    </div>
                                </div>
                                <div className='v row'>
                                    <div className='col-5 vrs text-white'>
                                    <img src='./tempreature.png' style={{width:"28px", marginTop:"4px"}}  alt='image'></img>
                                    <h5>Feels Like</h5>
                                        <h3>{main && (main.feels_like -273.15).toFixed(0)}<sup>o</sup>c</h3>
                                    </div>
                                    <div className='col-5 vrs text-white'>
                                        <img src='./cloudy.png' style={{width:"30px"}}></img>
                                        <h5>Cloudiness</h5>
                                        <h3>{cloud && cloud.all}%</h3>
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
