import React,{useState,useReducer} from 'react'
import "bootstrap/dist/css/bootstrap.css"
import SensorOutput from "./SensorOutput"

function Sensor() {

  let [currentValue,setCurrentValue] = useState(0);
  let [voltageValue,setVoltageValue] = useState(0);
  let [stat,setStat] = useState("OFF");
  let [state_,setState] = useState("MANUAL");

  let reducer = (state: any,action : any)=>{  
    let inputV = document.getElementById("currentInput") as HTMLInputElement;
    switch(action.type){
      case "cur":
        setCurrentValue(parseInt(inputV.value));
        break;
      case "vol":
        setVoltageValue(parseInt(inputV.value));
        break;
      default:
        return state;
    }
  }
  
  const [state, dispatch] = useReducer(reducer, { currentValue: 0, voltageValue: 0 });

  let onState = (e : any) => {  //NAPRAVI DA SE NA SWITCH PALI I GASE STAVARI
    alert("Hello worlddd!");
    console.log(e);
    if(e.checked) {
      console.log("ischked");
    }else if(!e.checked){
      console.log("NOT chked");
    }
  }


  return (
    <div id="antena1">
      <div className="card text-center" style={{ width: "18rem" }}>
        <div className="container">
          <img className="card-img-top" id="imgPlace1" src="./radio.png" alt="Radio img"/>
        </div>
        <div className="card-body" style={{ paddingBottom: 5 }}>
          <h5 className="card-title">Antenna 1</h5>
          <hr />
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={(e)=>{onState(e)}}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">ON/OFF</label>
            </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">AUTO/MANUAL</label>
          </div>
          <br />

          <SensorOutput id = { 111 } currentValue = { currentValue } voltageValue = { voltageValue } stat = { stat } state = {state_} />

          <div className="input-group mb-3">
            <input type="text" className="form-control" id = "currentInput" placeholder="Send data" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button className="btn btn-outline-primary" type="button" id="button-addon1" onClick={ ()=>{dispatch({ type:"cur" })} }>Cur</button>
            <button className="btn btn-outline-primary" type="button" id="button-addon2" onClick={ ()=>{dispatch({ type:"vol" })} }>Vol</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sensor