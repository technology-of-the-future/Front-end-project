import React from 'react'

export default function RegistrarCiudad() {
    return (
        <div className="container mt-4">
        <div className="row">
          <div className="col-md-7  mx-auto">
            <div className="card">
              <div className="container text-center fa-5x">
                <i className="fas fa-user-plus"></i>
              </div>
              <div className="card-header bg-info text-center">
                <h4>Registrar paciente</h4>
              </div>
              <div className="card-body">
                <form onSubmit={"guardar"}>
                  <div className="row">

                    <div className="col-md-6">
                      <label>Nombre de la ciudad</label>
                      <input type="text" className="form-control required" />
                    </div>

                    <div className="col-md-6">
                      <label>Apellidos</label>
                      <input type="text" className="form-control required" />
                    </div>
                    
                    <div className="col-md-6">
                      <label>Cedula</label>
                      <input type="text" className="form-control required" />
                    </div>
                    
                    <div className="col-md-6">
                      <label>Telefono</label>
                      <input type="text" className="form-control required" />
                    </div>

                    <div className="col-md-6">
                      <label>Dosis aplicadas</label>
                      <input type="text" className="form-control required" />
                    </div>
                                                            
                  </div>
                  <br />
                  <button type="submit" class="btn btn-outline-info">
                    <span class="fa fa-save"></span> Guardar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}