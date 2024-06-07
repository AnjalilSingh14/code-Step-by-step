import { useState } from 'react';
import StatePractice from './Component/State';
import MapState from './Component/mapState';
import Zero from './Component/State class';
import Student from './Component/Props';
function App() {
    const [ui,setUi] = useState("Anjali")
    let data= "Anjali Singh";
    function apple()
    {
        console.log(data)
        alert(data)
    }

    const ok = () =>{

        
            setUi("Mansi Verma")
    }
    return (
        <div className="App">
              <MapState/><hr/>
            <h1>{data}</h1>
            <button onClick={apple}>Click Me</button>
            <hr/>
            <h2>{ui}</h2>
            <button onClick={ok}>Remember This Code Always</button>
            <hr/>
            <StatePractice/>
            <Zero/> 
            <Student/>
        </div>
    );
}
   
export default App;