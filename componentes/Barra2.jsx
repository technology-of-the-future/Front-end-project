import React, { useState, useEffect } from 'react';
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';

export default function Barra2() {
    const [show, setShow] = useState (true)
    const [opcionRegistro, setOptionRegistro] = useState (false)
    const [menu, setMenu] = useState (false)

    useEffect(() => {

        if (sessionStorage.getItem('token')){
            setMenu(true)
            setShow(false)
            setOptionRegistro(true)
        }


    }, []); 

    const salir = () =>{

        sessionStorage.clear()
        window.location.href="/"
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                
                <Navbar.Brand href="#">Reservas Ya</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#">Inicio</Nav.Link>
                    <Nav.Link href="#"></Nav.Link>
                    {/* <Nav.Link href="#">Restaurantes</Nav.Link>
                    <Nav.Link href="#"></Nav.Link>
                    <Nav.Link href="#">Chef en casa </Nav.Link> */}
                    <Nav.Link href="#"></Nav.Link>
                    <NavDropdown hidden={show} title="Reservas" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#" disabled>Registrar</NavDropdown.Item>
                        <NavDropdown.Item href="/registrarPersona">Registrar persona</NavDropdown.Item>
                        <NavDropdown.Item href="/registrarCiudad">Registrar ciudad</NavDropdown.Item>
                    <NavDropdown.Divider />
                        <NavDropdown.Item href="#" disabled>Consultar</NavDropdown.Item>
                        <NavDropdown.Item href="/verPersonas">Ver personas</NavDropdown.Item>
                        <NavDropdown.Item href="/verCiudad">Ver ciudades</NavDropdown.Item>
                    
                    </NavDropdown>
                    <Nav.Link href="#"></Nav.Link>
                    <Nav.Link hidden={show} href="#" >Miembros VIP</Nav.Link>
                    <Nav.Link href="#"></Nav.Link>
                    <Nav.Link href="/login">Ingreso</Nav.Link>
                    <Nav.Link href="#"></Nav.Link>
                    <Nav.Link href="#">Registro</Nav.Link>
                    <Nav.Link href="#"></Nav.Link>
                    <Nav.Link hidden={show} href="#" onClick={()=>salir()} to="/" >Cerrar sesión</Nav.Link>
                    <Nav.Link href="#action2"><i class="far fa-question-circle"></i></Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Buscar</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}
