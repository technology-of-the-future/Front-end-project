import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';

export default function RegistrarPersona() {

  const[nombres,setNombres]=useState('')
  const[apellidos,setapellidos]=useState('')
  // const[estadoReserva,setestadoReserva]=useState([])
  // const[estadoReservaSelect,setestadoReservaSelect]=useState([])
  const[cantidadPersonas,setcantidadPersonas]=useState([])
  const[cantidadPersonasSelect,setcantidadPersonasSelect]=useState([])

  useEffect(()=>{
    // setestadoReserva(['No reservado', 'Reservado', 'Primera reserva'])
    // setestadoReservaSelect('No reservado')

    setcantidadPersonas(['Ninguna', 'Una', 'Dos', 'Tres', 'Cuatro'])
    setcantidadPersonasSelect('No reservado')
  },[])


  const guardar = async (e)=> {
    e.preventDefault()
    const usuario= {
      nombres,
      apellidos,
      // estadoReserva:estadoReservaSelect,
      cantidadPersonas:cantidadPersonasSelect,
      ciudad: sessionStorage.getItem('idUsuario'),
      ciudadNombre: sessionStorage.getItem('nombre'),
    }

    if (nombres===""){
      Swal.fire({
        icon: 'error',
        title: "Debe escribir un nombre",
        showConfirmButton:false,
        timer:1500
      })
    }
  
    else if (apellidos===""){
      Swal.fire({
        icon: 'error',
        title: "Debe escribir un apellido",
        showConfirmButton:false,
        timer:1500
      })
    }

    else {
  
      const token = sessionStorage.getItem('token')
      const respuesta = await Axios.post('/persona/crear', usuario,{

        headers:{'autorizacion':token}
      })
      const mensaje= respuesta.data.mensaje
      console.log(mensaje)

      Swal.fire({
        icon: 'success',
        title: mensaje,
        showConfirmButton:false,
        timer:1500
      })

      e.target.reset();
      setNombres("")
      setapellidos("")
    }

  }


    return (
      
        <div className="container mt-4">
        <div className="row">
          <div className="col-md-7  mx-auto">
            <div className="card">
              <div className="container text-center fa-5x">
                <i className="fas fa-user-plus"></i>
              </div>
              <div className="card-header bg-info text-center">
                <h4>Registrar reserva</h4>
              </div>
              <div className="card-body">
                <form onSubmit={guardar}>
                  <div className="row">

                    <div className="col-md-6">
                      <label>Nombres</label>
                      <input type="text" className="form-control required" onChange = {(e)=>setNombres(e.target.value)}/>
                    </div>

                    <div className="col-md-6">
                      <label>Apellidos</label>
                      <input type="text" className="form-control required" onChange = {(e)=>setapellidos(e.target.value)}/>
                    </div>
                    
                    {/* <div className="col-md-6">
                      <label>Cedula</label>
                      <input type="text" className="form-control required" onChange = {(e)=>setCedula(e.target.value)} />
                    </div> */}
                    
                    {/* <div className="col-md-6">
                      <label>Telefono</label>
                      <input type="text" className="form-control required" onChange = {(e)=>setTelefono(e.target.value)}/>
                    </div> */}

                    <div className="col-md-6">
                      <label>cantidadPersonas </label>
                      <select className='form-control' onChange={(e) => setcantidadPersonasSelect(e.target.value)}>

                        {
                          cantidadPersonas.map(cantidadPersonas => (
                            <option key={cantidadPersonas}>
                              {cantidadPersonas}
                            </option>
                          ))
                        }
                      </select>
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
