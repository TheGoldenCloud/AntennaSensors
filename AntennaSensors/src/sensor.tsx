import React from 'react'
import "bootstrap/dist/css/bootstrap.css"

function Sensor() {
  return (
    <div id="antena1">
          <div className="card text-center" style={{ width: "18rem" }}>
            <img className="card-img-top" id="imgPlace1" src="/nemaradio.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Grejač antene 1</h5>
              <h5>NI4093  Rudna glava</h5>
              {/* <div className="row"> 
                    <div className="col-4">
                      <a href="/monitor/write/6475/1" id="btnUkljU1" className="btn btn-danger">U upotrebi</a>
                    </div>
                    <div className="col-4">
                      <a href="/monitor/write/6476/0" id="btnRucMod1" className="btn btn-warning">Ručni mod</a>
                    </div>
                    <div className="col-4">
                      <a href="/monitor/write/6477/1" id="btnRucU1" className="btn btn-primary">Uključi grejač</a>
                    </div>
                  </div><br />
                  <div className="row">
                    <div className="col-4">
                      <a href="/monitor/write/6475/0" id="btnIskljU1" className="btn btn-danger">Van upotrebe</a>
                    </div>
                    <div className="col-4">
                      <a href="/monitor/write/6476/1" id="btnAutoMod1" className="btn btn-warning">Auto mod</a>
                    </div> 
                    <div className="col-4">
                      <a href="/monitor/write/6477/0" id="btnRucI1" className="btn btn-primary">Isključi grejač</a>
                    </div>
                    
                  </div><br /> */}
                  <div className="row">
                    <div className="col-6">
                        <a href="/monitor/write/6475/1" id="btnUkljU1" className="btn btn-danger">ON</a>
                    </div>
                    <div className="col-6">
                        <a href="/monitor/write/6475/1" id="btnUkljU1" className="btn btn-danger">OFF</a>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                    <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Auto/Manual</label>
                </div>
                    </div>
                    <div className="col-6">
                    <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Auto/Manual</label>
                </div>
                    </div>
                  </div>

                  
                    


                  <table className="table table-bordered">
                <tbody>
              
                  <tr>
                    <th scope="row">Status:</th>
                    <td id="statusGrejaca1" />
                  </tr>
                  <tr>
                    <th scope="row">Režim:</th>
                    <td id="rezimGrejaca1" />
                  </tr>
                  <tr>
                    <th scope="row">Stanje:</th>
                    <td id="stanjeGrejaca1" />
                  </tr>
                  <tr>
                    <th scope="row">Struja:</th>
                    <td><span id="strujagrejaca1" /><span>A</span></td>
                  </tr>
                  
                  <tr>
                    <th scope="row">Napon:</th>
                    <td><span id="napongrejaca1" /><span>V</span></td>
                  </tr>
                  <tr>
                    <th scope="row">Nominalna struja:</th>
                    <td><span id="nnv1" /><span>A</span></td>
                  </tr>


                  

                  

                  
                  
                </tbody>
              </table>

              

              <table>
                <tbody>
                  <tr>
                    <th scope="row" style={{ textAlign: "center", verticalAlign: "middle" }}><input type="text" placeholder="Nominalna struja" id="nomVred1" /></th>
                    <td style={{ textAlign: "center", verticalAlign: "middle" }}><a className="btn btn-danger" href="/monitor/write_r/10029/" onClick={event => { // TODO: Fix event handler code
`{
              
                      var inputVal = document.getElementById('nomVred1').value;
                      
                      location.href = this.href + inputVal; return false;
                      
                      }`; }}> Pošalji </a></td>
                  </tr>
                </tbody>
            </table>
              

            </div>
          </div>
        </div>
  )
}

export default Sensor