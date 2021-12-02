import React from "react";
import {Box, Container, Row, Column, FooterLink, Heading} from "../componentes/FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "white",
				textAlign: "center",
				marginTop: "-50px" }}>
		Reservas Ya
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>Acerca de nosotros</Heading>
			<FooterLink href="#">Nuestro equipo</FooterLink>
			<FooterLink href="#">Misión</FooterLink>
			<FooterLink href="#">Visión</FooterLink>
            <FooterLink href="#">Trabaje con nosotros</FooterLink>
		</Column>   
		<Column>
			<Heading>Reservas</Heading>
			<FooterLink href="#">Aplicación web</FooterLink>
			<FooterLink href="#">Chat</FooterLink>
			<FooterLink href="#">Llamadas</FooterLink>
		</Column>
		<Column>
			<Heading>Contactenos</Heading>
			<FooterLink href="#">Peticiones, Quejas y Reclamos</FooterLink>
			<FooterLink href="#">Calle 12 No. 72-24 Bogotá, D.C. </FooterLink>
			<FooterLink href="#">contacto@reservasya.com</FooterLink>
		</Column>
		<Column>
			<Heading>Redes Sociales</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;