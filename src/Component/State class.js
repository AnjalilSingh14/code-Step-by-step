import React,{Component} from 'react'
 export default class Zero extends Component {  
    constructor()
    {
        super();
        this.state={
            data:"Anjali"
        }
    }
    apple()
    {
        // alert("apple")
        this.setState({data:"Mansi"})
    }
        render()
        {
            return(
            
            <div className="App">
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.apple()}>Update Data</button>
            </div>

            );
        }
}