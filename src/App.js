import React, {useEffect,useState} from 'react';

const App = () => {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect( ()=>{

    const fetchApi = async() => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6cbac44af0b654034f54d205315dbce6`
      const response = await fetch(url)
      const resJson = await response.json();
    
      setCity(resJson.main);
    }

    fetchApi();
  },[search] )

  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <div className="input_data">
            <input type="search" placeholder="Enter City Name" onChange={(e)=>setSearch(e.target.value)}/>
          </div>

          {!city ? (<p>No City Found</p>) : 
          (<>
          <div className="info">
            <h1 className="location"><i className="fa fa-street-view" aria-hidden="true"></i>{search}</h1>
            <h1 className="temp">{city.temp}&deg;Cel</h1>
            <h3 className="tempmin_max">Min : {city.temp_min}&deg;Cel | Max : {city.temp_max}&deg;Cel</h3>
          </div>
          </>
          )
        }

          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>

        </div>
      </div>
    </>
  )
}

export default App;

//6cbac44af0b654034f54d205315dbce6
// api.openweathermap.org/data/2.5/weather?q={city name}&appid=6cbac44af0b654034f54d205315dbce6