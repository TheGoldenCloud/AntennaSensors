import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.css"

type propsType = {
    id : number
    currentValue : number
    voltageValue : number
    stat : string
    state : string
}

function SensorOutput({currentValue, voltageValue, stat,state} : propsType) {

//   let [current,setCurrent] = useState(currentValue);
//   let [voltage,setVoltage] = useState(voltageValue);

  return (
    <table className="table table-bordered">
        <tbody>
        <tr>
            <th scope="row">Status:</th>
            <td><span id="strujagrejaca1" />{stat} </td>
        </tr>
        <tr>
            <th scope="row">State:</th>
            <td><span id="strujagrejaca1" />{state} </td>
        </tr>
        <tr>
            <th scope="row">Current:</th>
            <td><span id="strujagrejaca1" />{currentValue} <span>A</span></td>
        </tr>
        <tr>
            <th scope="row">Voltage:</th>
            <td><span id="napongrejaca1" /> {voltageValue} <span>V</span></td>
        </tr>
    </tbody>
    </table> 
  )
}

export default SensorOutput