import React from 'react';
import logo from './img/sun.svg';
import hotterSun from './img/HotterSun.svg';
import colderSun from './img/ColderSun.svg';
import './App.css';
// import fakeWeather from './fake-weather.json'

function App() {
  const [weather, setWeather] = React.useState()

  React.useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=50.8225&lon=-0.1372&%20exclude=hourly,daily&appid=09e94020be3e9a39393dde13edd17736");
      // console.log (result.json())
      if (!ignore) setWeather(await result.json());
    }

    
    fetchData();
    return () => { ignore = true; }
    // we have no queries in the brackets
  }, []);

  // React.useEffect(async()=>{
  //   setWeather (await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&%20exclude=hourly,daily&appid=09e94020be3e9a39393dde13edd17736"))
  // },[])
  console.log(weather)

// let weatherNow = {Math.round(weather.current.temp-273.15)}
let weatherNow = "10"
let weatherYesterday = "11"
const weatherDifference = weatherNow-weatherYesterday
// const weatherDifference = 22-22
let sunImage = logo
let higherOrLower
if (weatherDifference>0) {higherOrLower="It is " +  [weatherDifference] + "°C warmer than yesterday"; sunImage=hotterSun} 
if (weatherDifference<0) {higherOrLower="It is " +  [weatherDifference] + "°C colder than yesterday"; sunImage=colderSun} 
if (weatherDifference==0) {higherOrLower="It is the same temperature as yesterday";}
console.log (higherOrLower)
console.log (weatherNow)

  if (!weather)return "loading"
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <p>
          {higherOrLower}, and the windspeed is ?????"
        </p>
        <img src={sunImage} className="App-weather-image" alt="weather-image" />
      </div>
      <div className="pretty-spacer">
          
        </div>
        <div className="lower-weather">
          <div>
            <p>
              Today's weather is {Math.round(weather.current.temp-273.15)}°C
            </p>
            <img src={logo} className="App-weather-image" alt="weather-image" />
          </div>
          <div className="blankColumn"></div>
          <div>
            <p>
              Yesterdays's weather was ??? {Math.round(weather-273.15)}°C
            </p>
            <img src={logo} className="App-weather-image" alt="weather-image" />
          </div>
        </div>        
          <a
            className="App-link"
            href="https://claraalder.com"
            target="_blank"
            rel="noopener noreferrer"
          >
<div className="spacer">
    
</div>
            My website :)
          </a>
          
        
      </header>
    </div>
  );
}

export default App;
