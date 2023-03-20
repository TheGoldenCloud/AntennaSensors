import React from 'react'
import "bootstrap/dist/css/bootstrap.css"

function Sensor() {
  return (
    <div id="antena1">
    <div className="card text-center" style={{ width: "18rem" }}>
      <div className="container">
        <img className="card-img-top" id="imgPlace1" src="./public/radio.png" alt="Radio img" />
      </div>
      <div className="card-body" style={{ paddingBottom: 5 }}>
        <h5 className="card-title">Antenna 1</h5>
        <hr /><div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">ON/OFF</label>
            </div><div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">AUTO/MANUAL</label>
            </div><br /><table className="table table-bordered">
          <tbody>
        
            <tr> 
              <th scope="row">Status:</th>
              <td id="statusGrejaca1" />
            </tr>
            <tr>
              <th scope="row">State:</th>
              <td id="stanjeGrejaca1" />
            </tr>
            <tr>
              <th scope="row">Current:</th>
              <td><span id="strujagrejaca1" /><span>A</span></td>
            </tr>
            
            <tr>
              <th scope="row">Voltage:</th>
              <td><span id="napongrejaca1" /><span>V</span></td>
            </tr>
            <tr>
              <th scope="row">Nominal current:</th>
              <td><span id="nnv1" /><span>A</span></td>
            </tr>

            

            

            
            
              
            
            
          </tbody>
        </table>

        

      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Nominal current" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-outline-primary" type="button" id="button-addon2">Send</button>
      </div>
        

      </div>
    </div>
  </div>
  )
}

export default Sensor