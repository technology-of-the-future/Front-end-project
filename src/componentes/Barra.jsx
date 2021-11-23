import React from 'react'
import {
    Navbar,
    Container,
    Offcanvas,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';
// import Footer from '../containers/Footer'

export default function Barra() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand={false} >
            
            <Container fluid>
                
                <Navbar.Toggle aria-controls="offcanvasNavbar" />

                <Navbar.Brand href="#">Bienvenido: Usuario</Navbar.Brand>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Brand href="/login">Ingreso</Navbar.Brand>
                <Navbar.Brand href="#">Registro</Navbar.Brand>
                <Navbar.Brand href="#"><i class="far fa-question-circle"></i></Navbar.Brand>


                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Opciones</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavDropdown title="Registros" id="offcanvasNavbarDropdown">
                        <NavDropdown.Item href="/registrarPersona">Registrar persona</NavDropdown.Item>
                        <NavDropdown.Item href="/registrarCiudad">Registrar ciudad</NavDropdown.Item>
                    </NavDropdown>
                    
                    <NavDropdown title="Reportes" id="offcanvasNavbarDropdown">
                        <NavDropdown.Item href="/verPersonas">Ver personas</NavDropdown.Item>
                        <NavDropdown.Item href="/verCiudad">Ver ciudades</NavDropdown.Item>
                    </NavDropdown>
                    
                    </Nav>
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Offcanvas.Body>
                </Navbar.Offcanvas>

            </Container>
            < Navbar  fixed  = " top "/>
            </Navbar>

            {/* <Footer/> */}
        </div>
    )
}
