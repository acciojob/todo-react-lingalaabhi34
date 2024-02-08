
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
    const [data,setdata] = useState("");
    const [output,setoutput]=useState([]);
    function inputdata(e){
        setdata(e.target.value)
    }
    function Adddata(e){
e.preventDefault();
setoutput([...output,data]);
setdata("");
    }


    function deltetodo(index){
       setoutput(output.filter((item,i)=>i !== index ))
    }
  return (
    <div>
        {/* Do not remove the main div */}
 
   
       <form onSubmit={Adddata}>
       <input type="text" placeholder="enter data" onChange={inputdata} value={data}></input>
<button type="submit">Add Todo</button>
       </form>
       {
        output &&
        output.map((item,index)=>(
        
                <ul >
                    <li  key={index}>{item}</li> <button onClick={()=>deltetodo(index)}>delete</button>
                </ul>
            
               

           
        ))
       }
        
    
    </div>
  )
}

export default App
