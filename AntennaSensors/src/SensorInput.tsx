import React,{ useState }  from 'react'
import "bootstrap/dist/css/bootstrap.css"

function Sensor() {

  let [currentValue,setCurrentValue] = useState(0);

  let sendData = () => {
    document.getElementById("button-addon2")?.addEventListener("click", () =>{
      setCurrentValue(currentValue);
      //document.getElementById("currentInput").value;
      
      
    })
  }

  return (
    <div className="input-group mb-3">
        <input type="text" className="form-control" id="currentInput" placeholder="Nominal current" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-outline-primary" type="button" id="button-addon2">Send</button>
    </div>
  )
}

export default Sensor