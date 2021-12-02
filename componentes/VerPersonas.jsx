import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table'
import Axios from 'axios';
import Swal from 'sweetalert2';
import {Modal, Button} from 'react-bootstrap';

function BasicSearch() {
  const[personas,setPersonas]=useState([])
  const[idPersona,setIdPersona]=useState('')
  const[nombres,setNombres]=useState('')
  const[apellidos,setapellidos]=useState('')
  // const[estadoReserva,setestadoReserva]=useState([])
  // const[estadoReservaSelect,setestadoReservaSelect]=useState([])
  const[cantidadPersonas,setcantidadPersonas]=useState([])
  const[cantidadPersonasSelect,setcantidadPersonasSelect]=useState([])

  //Aqui van unas constantes o elementos del Modals

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    obtenerPersonas()
    // setestadoReserva(['No reservado', 'Reservado', 'Primera reserva'])
    // setestadoReservaSelect('No reservado')

    setcantidadPersonas(['Ninguna', 'Una', 'Dos', 'Tres', 'Cuatro'])
    setcantidadPersonasSelect('No reservado')
  },[])

  const obtenerPersonas = async()=>{
    const id = sessionStorage.getItem('idUsuario')
    const token = sessionStorage.getItem('token')
    const respuesta = await Axios.get('/persona/listarPersonasCiudad/'+id,{
      headers:{'autorizacion':token}
    })

      console.log(respuesta)
      setPersonas(respuesta.data)
    
  }
  
  const obtenerPersona= async (idParametro)=>{

    setShow(true)
    const id = idParametro
    const token = sessionStorage.getItem('token')
    const respuesta = await Axios.get('/persona/listar/'+id,{
      headers:{'autorizacion':token}
    })

    console.log(respuesta.data)
    setIdPersona(respuesta.data._id)
    setNombres(respuesta.data.nombres)
    setapellidos(respuesta.data.apellidos)
    setcantidadPersonasSelect(respuesta.data.cantidadPersonas)

  }

  const actualizar = async (e) => {

    e.preventDefault();
    const id = idPersona
    const token = sessionStorage.getItem('token')
    const persona = {
      nombres,
      apellidos,
      cantidadPersonas: cantidadPersonasSelect

    }

    const respuesta = await Axios.put('/persona/actualizar/'+id, persona,{
      headers:{'autorizacion': token}
    })

    const mensaje = respuesta.data.mensaje
    obtenerPersonas()

    Swal.fire({
      icon: 'success',
      title: mensaje,
      showConfirmButton:false,
      timer:1500
    })
    setShow(false)

  }

  const eliminar = async (id)=>{

    const token = sessionStorage.getItem('token')
    const respuesta = await Axios.delete('/persona/eliminar/'+id,{
      headers:{'autorizacion': token}
    })
    const mensaje = respuesta.data.mensaje
    Swal.fire({
      icon: 'success',
      title: mensaje,
      showConfirmButton:false,
      timer:1500
    })
    
    obtenerPersonas()
  }

  const data = 
  personas.map((persona)=>({
    
    id: persona._id,
    nombres: persona.nombres,
    apellidos: persona.apellidos,
    cantidadPersonas: persona.cantidadPersonas,
    estadoReserva: persona.estadoReserva,
  }))

    return (
    <div className="container">
        <br />
      <MaterialTable
        title="Reservas 1"
        columns={[
          { title: 'ID', field: 'id' },
          { title: 'NOMBRES', field: 'nombres' },
          { title: 'APELLIDOS', field: 'apellidos' },
          { title: 'CANTIDAD DE PERSONAS', field: 'cantidadPersonas' },
          { title: 'ESTADO DE RESERVA', field: 'estadoReserva' },
        ]}
        data={data}        
        options={{
          search: true,
          actionsColumnIndex:-1,
          initialPage:1
        }}

        actions={[
          {
            icon:'delete',
            tooltip:'Eliminar',
            onClick:(event, rowData)=>eliminar(rowData.id)
          },
          {
            icon:'edit',
            tooltip:'Editar',
            onClick:(event, rowData)=>obtenerPersona(rowData.id)
          }
        ]}
      />

        <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar persona / reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          
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
                  <form onSubmit={'guardar'}>
                    <div className="row">

                      <div className="col-md-6">
                        <label>Nombres</label>
                        <input type="text" className="form-control required" onChange = {(e)=>setNombres(e.target.value)} value={nombres}/>
                      </div>

                      <div className="col-md-6">
                        <label>Apellidos</label>
                        <input type="text" className="form-control required" onChange = {(e)=>setapellidos(e.target.value)} value={apellidos}/>
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
                        <select className='form-control' onChange={(e) => setcantidadPersonasSelect(e.target.value)} value={cantidadPersonasSelect}>

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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={actualizar}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
      </div>
    )
  }
export default BasicSearch