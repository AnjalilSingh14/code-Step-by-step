import { useState } from "react"

export default function MapState()
{
    const [cities,setcities] = useState(["Indore","Dewas","Ratlam"])

    const addCity = () => {
        const ctn = document.getElementById("ct").value;
        // var cts = cities
        // cts.push(ctn)
        // console.log(ctn)
       setcities([...cities,ctn])

    }

    const [Friends,setfriend] = useState(["Mansi","Anjali","Anjani","Pooja"])

    const addName = () => {
        const fds = document.getElementById("fd").value;
        setfriend([...Friends,fds])
    }
    return<>
     <h1>Cities Name</h1>
     <br/>
     <input type="text" id="ct" placeholder="Enter your city name"/>&nbsp;&nbsp;&nbsp;
     <button onClick={addCity}>Add City</button><br/>
     <ol>
        {cities.map(city=><li>{city}</li>)}
     </ol>
     <hr/>
     <h1>Friends</h1>
     <br/>
     <input type="text" id="fd" placeholder=""/>&nbsp;&nbsp;&nbsp;&nbsp;
     <button onClick={addName}>addName</button><br/>
     <ol>
        {Friends.map(fri=><li>{fri}</li>)}
     </ol>
    </>
}